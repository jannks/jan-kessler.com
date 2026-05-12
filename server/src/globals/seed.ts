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
            text: '© {year} · Mit zu viel Kaffee gemacht in Villingen-Schwenningen',
        },
    },
    en: {
        nav: {
            freelance: 'Freelance',
            github: 'GitHub',
            languageAria: 'Switch language',
        },
        footer: {
            text: '© {year} · Made with too much coffee in Villingen-Schwenningen',
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
                'Jan Kessler ist Softwareentwickler aus Villingen-Schwenningen.',
        },
        intro: {
            status: 'Offen für Projekte · Keine Agenturen bitte',
            polaroidAlt: 'Portrait von Jan Kessler',
            polaroidCaption: 'das bin ich, hi 👋',
            currentlyKicker: 'Aktuell',
            currentlyRole: 'Software Engineer',
            currentlySuffix: '& Lead Dev',
            currentlyAt: 'bei',
            asideKicker: 'Nebenbei',
            asideText:
                'Baue Sachen seit 2014, meistens in TypeScript, manchmal in Swift, wenn die Stimmung passt.',
            freelanceCta: 'Buch mich nebenbei',
            scrollHint: 'scroll, wenn du neugierig bist',
            scrollAria: 'Zu ausgewählter Arbeit scrollen',
        },
        projects: {
            chapterTag: 'Kapitel 02',
            titlePrefix: 'Sachen,',
            titleItalic: 'die ich',
            titleMarker: 'wirklich gelauncht habe',
            ledePrefix: 'Keine Side-Projects, keine „evaluiert",',
            ledeStrike: 'in Produktion eingesetzt',
            ledeItalic: 'echte Nutzer schreien an, wenn was kaputtgeht.',
            stamps: [
                { label: 'live' },
                { label: 'läuft' },
                { label: 'in prod' },
                { label: 'noch da' },
            ],
        },
    },
    en: {
        meta: {
            title: 'Jan Kessler — Software Engineer',
            description:
                'Jan Kessler is a software developer based in Villingen-Schwenningen, Germany.',
        },
        intro: {
            status: 'Open for projects · No agencies pls',
            polaroidAlt: 'Portrait of Jan Kessler',
            polaroidCaption: "that's me, hi 👋",
            currentlyKicker: 'Currently',
            currentlyRole: 'Software Engineer',
            currentlySuffix: '& Lead Dev',
            currentlyAt: '@',
            asideKicker: 'Aside',
            asideText:
                'Building things since 2014, mostly in TypeScript, sometimes in Swift when the mood strikes.',
            freelanceCta: 'Hire me on the side',
            scrollHint: "scroll if you're nosy",
            scrollAria: 'Scroll to selected work',
        },
        projects: {
            chapterTag: 'Chapter 02',
            titlePrefix: 'Stuff',
            titleItalic: "I've",
            titleMarker: 'actually shipped',
            ledePrefix: 'Not side-projects, not "explored",',
            ledeStrike: 'used in production',
            ledeItalic: 'real users yelling at me when it broke.',
            stamps: [
                { label: 'shipped' },
                { label: 'live' },
                { label: 'in prod' },
                { label: 'still up' },
            ],
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
            availabilityTag: 'Nehme Freelance-Aufträge an · Q3 + Q4',
            titleLine1: 'Freelance',
            titleScript: 'Software',
            titleLine3: 'Engineer',
            pitchPrefix: 'Ich helfe Produkt-Teams dabei, ',
            pitchMarker: 'ambitionierte Web-Apps',
            pitchSuffix:
                ' zu designen, zu bauen und live zu bringen — vom ersten Prototyp bis zum „läuft in Prod, echte Nutzer drin".',
            pitchItalic: 'Am liebsten die Art, die Miete zahlt.',
            ctaPrimary: 'Sag hallo',
            ctaSecondary: 'Meine Arbeit ansehen',
            availableLabel: 'Verfügbar',
            availableSub: 'so ziemlich jetzt',
            basedInKicker: 'Sitz in',
            basedInValue: 'Villingen-Schwenningen, Deutschland',
            workingWithKicker: 'Arbeite mit',
            workingWithValue: 'Teams in der EU + remote',
            replyTimeKicker: 'Antwortzeit',
            replyTimeValue: '~2 Tage, manchmal schneller',
        },
        chapter01: {
            tag: 'Kapitel 01',
            titlePrefix: 'Sachen, die ich',
            titleMarker: 'gerne',
            titleSuffix: 'übernehme',
            services: [
                {
                    title: 'SaaS, von A bis Z',
                    description:
                        'Web-Apps von „Skizze auf der Serviette" bis „in Prod mit zahlenden Nutzern". API-Design, DB-Modellierung, Frontend, der ganze Deploy-Kram.',
                },
                {
                    title: 'Tech Lead, geliehen',
                    description:
                        'Architektur-Reviews, Mentoring und das gelegentliche „warum ist das kaputt"-Tieftauchen für Teams, die ein Senior-Hirn part-time brauchen.',
                },
                {
                    title: 'Backend, das skaliert',
                    description:
                        'NestJS / Node.js, REST + GraphQL, MongoDB-Schemas, die dich in zwei Jahren nicht heimsuchen.',
                },
                {
                    title: 'Frontend, refactored',
                    description:
                        'Rettungen für Angular und React. Performance-Arbeit. Design-Systeme, die den Kontakt mit der Realität überleben.',
                },
            ],
        },
        chapter02: {
            tag: 'Kapitel 02',
            titlePrefix: 'Die',
            titleScript: 'Tools',
            titleSuffix: 'nach denen ich greife',
            lede:
                'Nicht vollständig. Nur die, die ich im Code-Review verteidige.',
        },
        chapter03: {
            tag: 'Kapitel 03 · Kontakt',
            titlePrefix: 'Etwas',
            titleMarker: 'Spannendes',
            text:
                'Schreib mir. Ich lese alles (irgendwann) und antworte innerhalb von ein paar Tagen.',
        },
    },
    en: {
        meta: {
            title: 'Freelance Software Engineer — Jan Kessler',
            description:
                'Freelance Software Engineer based in Villingen-Schwenningen — SaaS development, tech lead on demand, backend and frontend engineering.',
        },
        hero: {
            availabilityTag: 'Taking on freelance work · Q3 + Q4',
            titleLine1: 'Freelance',
            titleScript: 'Software',
            titleLine3: 'Engineer',
            pitchPrefix: 'I help product teams design, build, and ship ',
            pitchMarker: 'ambitious web apps',
            pitchSuffix:
                ' — from first prototype to "running in prod with real users".',
            pitchItalic: 'Mostly the kind that pay rent.',
            ctaPrimary: 'Say hi',
            ctaSecondary: 'See my work',
            availableLabel: 'Available',
            availableSub: 'now-ish',
            basedInKicker: 'Based in',
            basedInValue: 'Villingen-Schwenningen, Germany',
            workingWithKicker: 'Working with',
            workingWithValue: 'Teams in EU + remote',
            replyTimeKicker: 'Reply time',
            replyTimeValue: '~2 days, sometimes faster',
        },
        chapter01: {
            tag: 'Chapter 01',
            titlePrefix: "Things I'll",
            titleMarker: 'happily',
            titleSuffix: 'take on',
            services: [
                {
                    title: 'SaaS, soup-to-nuts',
                    description:
                        'Web apps from "napkin sketch" to "production with paying users". API design, DB modeling, frontend, the boring deploy stuff.',
                },
                {
                    title: 'Tech Lead, on loan',
                    description:
                        'Architecture reviews, mentoring, and the occasional "why is this broken" deep-dive for teams that need a senior brain part-time.',
                },
                {
                    title: 'Backend that scales',
                    description:
                        "NestJS / Node.js, REST + GraphQL, MongoDB schemas that won't haunt you in two years.",
                },
                {
                    title: 'Frontend, refactored',
                    description:
                        'Angular and React rescues. Performance work. Design systems that survive contact with reality.',
                },
            ],
        },
        chapter02: {
            tag: 'Chapter 02',
            titlePrefix: 'The',
            titleScript: 'tools',
            titleSuffix: 'I reach for',
            lede:
                "Not exhaustive. Just the ones I'll happily defend in code review.",
        },
        chapter03: {
            tag: 'Chapter 03 · Contact',
            titlePrefix: 'Got something',
            titleMarker: 'interesting',
            text:
                'Drop me a line. I read everything (eventually) and reply within a couple of days.',
        },
    },
};

const seedGlobal = async (
    payload: Payload,
    slug: 'site' | 'home-page' | 'freelance-page',
    locale: Locale,
    data: Record<string, unknown>,
): Promise<void> => {
    const api = payload as unknown as {
        findGlobal: (args: Record<string, unknown>) => Promise<{
            updatedAt?: string | null;
        } | null>;
        updateGlobal: (args: Record<string, unknown>) => Promise<unknown>;
    };
    const current = await api.findGlobal({ slug, locale, depth: 0 });
    if (current?.updatedAt) return;
    await api.updateGlobal({ slug, locale, data });
    payload.logger.info(`Seeded global "${slug}" for locale "${locale}".`);
};

export const seedGlobals = async (payload: Payload): Promise<void> => {
    try {
        for (const locale of ['de', 'en'] as const) {
            await seedGlobal(payload, 'site', locale, {
                ...siteSeed[locale],
                stack: stackSeed,
            });
            await seedGlobal(payload, 'home-page', locale, homeSeed[locale]);
            await seedGlobal(
                payload,
                'freelance-page',
                locale,
                freelanceSeed[locale],
            );
        }
    } catch (err) {
        payload.logger.error({ err }, 'Failed to seed globals');
    }
};
