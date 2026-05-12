import type { Payload } from 'payload';

type Locale = 'de' | 'en';

const siteSeed: Record<Locale, any> = {
    de: {
        nav: {
            freelance: 'Freelance',
            github: 'GitHub',
            languageAria: 'Sprache wechseln',
        },
        footer: {
            text: '© {year}',
        },
    },
    en: {
        nav: {
            freelance: 'Freelance',
            github: 'GitHub',
            languageAria: 'Switch language',
        },
        footer: {
            text: '© {year}',
        },
    },
};

const stackSeed = [
    'TypeScript',
    'Angular',
    'React',
    'NestJS',
    'Node.js',
    'MongoDB',
    'Docker',
    'Kubernetes',
    'iOS (Swift)',
    'Android (Kotlin)',
].map((name) => ({ name }));

const homeSeed: Record<Locale, any> = {
    de: {
        meta: {
            title: 'Jan Kessler — Software Engineer',
            description:
                'Jan Kessler – Software Engineer aus Villingen-Schwenningen. Backend, Frontend und Tech-Lead für ambitionierte Web-Produkte.',
        },
        intro: {
            status: 'Offen für Projekte',
            polaroidAlt: 'Portrait von Jan Kessler',
            polaroidCaption: 'Jan, hi.',
            currentlyKicker: 'Aktuell',
            currentlyRole: 'Software Engineer',
            currentlySuffix: '& Lead Dev',
            currentlyAt: 'bei',
            asideKicker: 'Hintergrund',
            asideText:
                'Seit 2018 in der Software-Entwicklung – primär TypeScript, daneben Swift für native iOS-Anwendungen.',
            freelanceCta: 'Anfrage senden',
            scrollHint: 'Ausgewählte Arbeiten',
            scrollAria: 'Zu ausgewählten Arbeiten scrollen',
        },
        projects: {
            titlePrefix: 'Projekte,',
            titleItalic: 'an denen ich',
            titleMarker: 'mitgewirkt habe',
            ledePrefix: 'Keine Konzepte, keine Prototypen – sondern Anwendungen,',
            ledeItalic: 'die jeden Tag von echten Nutzern verwendet werden.',
        },
    },
    en: {
        meta: {
            title: 'Jan Kessler — Software Engineer',
            description:
                'Jan Kessler – Software Engineer based in Villingen-Schwenningen, Germany. Backend, frontend, and tech leadership for ambitious web products.',
        },
        intro: {
            status: 'Currently accepting select freelance projects',
            polaroidAlt: 'Portrait of Jan Kessler',
            polaroidCaption: 'Jan, hi.',
            currentlyKicker: 'Currently',
            currentlyRole: 'Software Engineer',
            currentlySuffix: '& Lead Dev',
            currentlyAt: '@',
            asideKicker: 'Background',
            asideText:
                'Building production software since 2014 — primarily in TypeScript, complemented by Swift for native iOS work.',
            freelanceCta: 'Available for freelance',
            scrollHint: 'Selected work',
            scrollAria: 'Scroll to selected work',
        },
        projects: {
            titlePrefix: 'Projects',
            titleItalic: "I've",
            titleMarker: 'shipped to production',
            ledePrefix: 'Not concepts, not prototypes — applications',
            ledeItalic: 'relied on daily by real customers.',
        },
    },
};

const freelanceSeed: Record<Locale, any> = {
    de: {
        meta: {
            title: 'Freelance Software Engineer — Jan Kessler',
            description:
                'Freelance Software Engineer aus Villingen-Schwenningen — SaaS-Entwicklung, Tech-Lead auf Anfrage, Backend & Frontend.',
        },
        hero: {
            availabilityTag: 'Freelance-Kapazität verfügbar · Q3 + Q4',
            titleLine1: 'Freelance',
            titleScript: 'Software',
            titleLine3: 'Engineer',
            pitchPrefix: 'Ich unterstütze Produkt-Teams dabei, ',
            pitchMarker: 'ambitionierte Web-Anwendungen',
            pitchSuffix:
                ' zu konzipieren, zu bauen und in Produktion zu bringen – vom ersten Prototyp bis zum stabilen Betrieb.',
            pitchItalic: 'Bevorzugt Projekte mit klarem Produktziel.',
            ctaPrimary: 'Kontakt aufnehmen',
            ctaSecondary: 'Arbeiten ansehen',
            availableLabel: 'Verfügbar',
            availableSub: 'ab sofort',
            basedInKicker: 'Standort',
            basedInValue: 'Villingen-Schwenningen, Deutschland',
            workingWithKicker: 'Zusammenarbeit',
            workingWithValue: 'Remote mit Teams in DACH und Europa',
            replyTimeKicker: 'Antwortzeit',
            replyTimeValue: 'Innerhalb von 1–2 Werktagen',
        },
        chapter01: {
            titlePrefix: 'Wo ich',
            titleMarker: 'gerne',
            titleSuffix: 'helfe',
            services: [
                {
                    title: 'End-to-End SaaS-Entwicklung',
                    description:
                        'API-Design, Datenmodellierung, Frontend und Deployment – Web-Anwendungen vom Konzept bis zum produktiven Betrieb mit echten Nutzern.',
                },
                {
                    title: 'Tech Lead auf Zeit',
                    description:
                        'Architektur-Reviews, Mentoring und gezielte Problemanalysen – für Teams, die punktuell erfahrene Unterstützung brauchen.',
                },
                {
                    title: 'Skalierbares Backend',
                    description:
                        'NestJS und Node.js, REST- und GraphQL-APIs, MongoDB-Schemas, die auch in zwei Jahren noch wartbar sind.',
                },
                {
                    title: 'Frontend-Modernisierung',
                    description:
                        'Refactoring bestehender Angular- und React-Anwendungen, Performance-Optimierung und langlebige Design-Systeme.',
                },
            ],
        },
        chapter02: {
            titlePrefix: 'Die',
            titleScript: 'Tools',
            titleSuffix: 'mit denen ich arbeite',
            lede: 'Kein vollständiger Katalog – nur die Technologien, die ich täglich einsetze und empfehle.',
        },
        chapter03: {
            titlePrefix: 'Etwas',
            titleMarker: 'Konkretes',
            text: 'Eine kurze Skizze des Vorhabens genügt – ich melde mich innerhalb von 1–2 Werktagen.',
        },
    },
    en: {
        meta: {
            title: 'Freelance Software Engineer — Jan Kessler',
            description:
                'Freelance Software Engineer based in Villingen-Schwenningen — SaaS development, tech lead on demand, backend and frontend engineering.',
        },
        hero: {
            availabilityTag: 'Freelance availability · Q3 + Q4',
            titleLine1: 'Freelance',
            titleScript: 'Software',
            titleLine3: 'Engineer',
            pitchPrefix: 'I help product teams design, build, and operate ',
            pitchMarker: 'ambitious web applications',
            pitchSuffix:
                ' — from initial prototype to a stable production deployment with real users.',
            pitchItalic: 'Preferably projects with real business impact.',
            ctaPrimary: 'Get in touch',
            ctaSecondary: 'See my work',
            availableLabel: 'Available',
            availableSub: 'starting immediately',
            basedInKicker: 'Based in',
            basedInValue: 'Villingen-Schwenningen, Germany',
            workingWithKicker: 'Working with',
            workingWithValue: 'Remote with teams across DACH and the EU',
            replyTimeKicker: 'Reply time',
            replyTimeValue: 'Within 1–2 business days',
        },
        chapter01: {
            titlePrefix: 'Where I',
            titleMarker: 'happily',
            titleSuffix: 'lend a hand',
            services: [
                {
                    title: 'End-to-end SaaS development',
                    description:
                        'Conception, API design, data modeling, frontend development, and deployment — web applications from initial idea to production with real users.',
                },
                {
                    title: 'Tech Lead on demand',
                    description:
                        'Architecture reviews, mentoring, and targeted problem analysis — for teams that need senior expertise on a part-time basis.',
                },
                {
                    title: 'Backend that scales',
                    description:
                        'NestJS and Node.js, REST and GraphQL APIs, and well-designed MongoDB schemas built for long-term maintainability.',
                },
                {
                    title: 'Frontend modernization',
                    description:
                        'Refactoring existing Angular and React codebases, performance optimization, and durable design systems.',
                },
            ],
        },
        chapter02: {
            titlePrefix: 'The',
            titleScript: 'tools',
            titleSuffix: 'I work with',
            lede: 'Not an exhaustive list — these are the technologies I can confidently recommend from daily practice.',
        },
        chapter03: {
            titlePrefix: 'Got something',
            titleMarker: 'concrete',
            text: "Let's talk. A short outline of your project is enough to get started — I typically reply within 1–2 business days.",
        },
    },
};

const seedGlobal = async (
    payload: Payload,
    slug: 'site' | 'home-page' | 'freelance-page',
    locale: Locale,
    data: Record<string, unknown>,
    force: boolean,
): Promise<void> => {
    const api = payload as unknown as {
        findGlobal: (args: Record<string, unknown>) => Promise<{
            updatedAt?: string | null;
        } | null>;
        updateGlobal: (args: Record<string, unknown>) => Promise<unknown>;
    };
    if (!force) {
        const current = await api.findGlobal({ slug, locale, depth: 0 });
        if (current?.updatedAt) return;
    }
    await api.updateGlobal({ slug, locale, data });
    payload.logger.info(
        `Seeded global "${slug}" for locale "${locale}"${force ? ' (forced)' : ''}.`,
    );
};

export const seedGlobals = async (payload: Payload): Promise<void> => {
    const force = process.env.SEED_FORCE === '1';
    try {
        for (const locale of ['de', 'en'] as const) {
            await seedGlobal(
                payload,
                'site',
                locale,
                { ...siteSeed[locale], stack: stackSeed },
                force,
            );
            await seedGlobal(
                payload,
                'home-page',
                locale,
                homeSeed[locale],
                force,
            );
            await seedGlobal(
                payload,
                'freelance-page',
                locale,
                freelanceSeed[locale],
                force,
            );
        }
    } catch (err) {
        payload.logger.error({ err }, 'Failed to seed globals');
    }
};
