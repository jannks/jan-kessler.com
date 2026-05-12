import type { AstroGlobal } from 'astro';
import { defaultLocale, locales, type Locale } from './ui';

/**
 * Resolve the current locale from Astro's context with a safe fallback.
 */
export const getLocale = (astro: AstroGlobal): Locale => {
    const current = astro.currentLocale;
    return (locales as readonly string[]).includes(current ?? '')
        ? (current as Locale)
        : defaultLocale;
};

/**
 * Build a path for the given locale, preserving the current pathname.
 * The default locale uses no URL prefix; non-default locales are prefixed with `/{locale}`.
 */
export const getLocalizedPath = (
    pathname: string,
    locale: Locale,
    currentLocale: Locale,
): string => {
    const stripped = stripLocalePrefix(pathname, currentLocale);
    if (locale === defaultLocale) {
        return stripped === '' ? '/' : stripped;
    }
    return stripped === '' ? `/${locale}` : `/${locale}${stripped}`;
};

/**
 * Build a localized path for a known internal route (without locale prefix), e.g. `/freelance`.
 */
export const localizeHref = (path: string, locale: Locale): string => {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    if (locale === defaultLocale) {
        return normalized;
    }
    if (normalized === '/') {
        return `/${locale}`;
    }
    return `/${locale}${normalized}`;
};

const stripLocalePrefix = (pathname: string, currentLocale: Locale): string => {
    if (currentLocale === defaultLocale) {
        return pathname === '/' ? '' : pathname;
    }
    const prefix = `/${currentLocale}`;
    if (pathname === prefix) return '';
    if (pathname.startsWith(`${prefix}/`)) {
        return pathname.slice(prefix.length);
    }
    return pathname === '/' ? '' : pathname;
};
