import type { FreelancePage, HomePage, Site } from '@payload-types';

export const locales = ['de', 'en'] as const;
export const defaultLocale = 'de' as const;

export type Locale = (typeof locales)[number];

export const languageLabels: Record<Locale, string> = {
    de: 'DE',
    en: 'EN',
};

type Service = NonNullable<FreelancePage['chapter01']['services']>[number];

export interface Dictionary {
    htmlLang: Locale;
    nav: Site['nav'];
    meta: {
        home: HomePage['meta'];
        freelance: FreelancePage['meta'];
    };
    footer: Site['footer'];
    intro: HomePage['intro'];
    projects: HomePage['projects'];
    freelance: FreelancePage['hero'] & {
        chapter01TitlePrefix: string;
        chapter01TitleMarker: string;
        chapter01TitleSuffix: string;
        chapter02TitlePrefix: string;
        chapter02TitleScript: string;
        chapter02TitleSuffix: string;
        chapter02Lede: string;
        chapter03TitlePrefix: string;
        chapter03TitleMarker: string;
        chapter03Text: string;
        services: readonly Service[];
    };
    stack: readonly string[];
}

const CACHE_TTL_MS = 30_000;
const cache = new Map<Locale, { expires: number; promise: Promise<Dictionary> }>();

const getApiUrl = (): string => {
    const url = import.meta.env.API_URL ?? process.env.API_URL;
    if (!url) {
        throw new Error('API_URL is not defined');
    }
    return url;
};

const fetchGlobal = async <T>(slug: string, locale: Locale): Promise<T> => {
    const response = await fetch(
        `${getApiUrl()}/api/globals/${slug}?locale=${locale}&depth=0`,
    );
    if (!response.ok) {
        throw new Error(
            `Failed to fetch global "${slug}" (${locale}): ${response.status}`,
        );
    }
    return (await response.json()) as T;
};

const buildDictionary = (
    locale: Locale,
    site: Site,
    home: HomePage,
    freelance: FreelancePage,
): Dictionary => ({
    htmlLang: locale,
    nav: site.nav,
    meta: {
        home: home.meta,
        freelance: freelance.meta,
    },
    footer: site.footer,
    intro: home.intro,
    projects: home.projects,
    freelance: {
        ...freelance.hero,
        chapter01TitlePrefix: freelance.chapter01.titlePrefix,
        chapter01TitleMarker: freelance.chapter01.titleMarker,
        chapter01TitleSuffix: freelance.chapter01.titleSuffix,
        chapter02TitlePrefix: freelance.chapter02.titlePrefix,
        chapter02TitleScript: freelance.chapter02.titleScript,
        chapter02TitleSuffix: freelance.chapter02.titleSuffix,
        chapter02Lede: freelance.chapter02.lede,
        chapter03TitlePrefix: freelance.chapter03.titlePrefix,
        chapter03TitleMarker: freelance.chapter03.titleMarker,
        chapter03Text: freelance.chapter03.text,
        services: freelance.chapter01.services ?? [],
    },
    stack: (site.stack ?? []).map((s) => s.name),
});

const loadDictionary = async (locale: Locale): Promise<Dictionary> => {
    const [site, home, freelance] = await Promise.all([
        fetchGlobal<Site>('site', locale),
        fetchGlobal<HomePage>('home-page', locale),
        fetchGlobal<FreelancePage>('freelance-page', locale),
    ]);
    return buildDictionary(locale, site, home, freelance);
};

export const getDictionary = (locale: Locale): Promise<Dictionary> => {
    const now = Date.now();
    const entry = cache.get(locale);
    if (entry && entry.expires > now) {
        return entry.promise;
    }
    const promise = loadDictionary(locale).catch((err) => {
        cache.delete(locale);
        throw err;
    });
    cache.set(locale, { expires: now + CACHE_TTL_MS, promise });
    return promise;
};
