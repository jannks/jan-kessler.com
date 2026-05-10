import React from 'react';
import {
    Github,
    Mail,
    ExternalLink,
    Code2,
    Briefcase,
    ChevronRight,
} from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'teamatic',
        company: 'Ah&Oh GmbH',
        description:
            'SaaS-based time tracking with native mobile and web apps.',
        tech: [
            'Angular',
            'Node.js',
            'NestJs',
            'MongoDB',
            'iOS (Swift)',
            'Android (Kotlin)',
        ],
        link: '#',
    },
    {
        id: 2,
        title: 'besttrick',
        company: 'Ah&Oh GmbH',
        description:
            'Social media platform for skateboarders and snowboarders, including video processing and native mobile apps.',
        tech: [
            'Node.js',
            'NestJs',
            'MongoDB',
            'Docker',
            'Kubernetes',
            'iOS (Swift)',
            'Android (Kotlin)',
        ],
        link: '#',
    },
    {
        id: 3,
        title: 'setHUB',
        company: 'Ah&Oh GmbH',
        description:
            'Headless API and Page Builder for enterprise-level websites as SaaS.',
        tech: ['Angular', 'Node.js', 'NestJs', 'MongoDB', 'Docker'],
        link: '#',
    },
    {
        id: 4,
        title: 'einfach-bewerben',
        company: 'einfach-bewerben GmbH',
        description: 'Application Management as SaaS',
        tech: ['Angular', 'NestJs', 'Node.js', 'MongoDB'],
        link: '#',
    },
];

export default function App() {
    const kusamaPattern = {
        backgroundColor: '#facc15', // Tailwind yellow-400
        backgroundImage:
            'radial-gradient(#000 15%, transparent 16%), radial-gradient(#000 15%, transparent 16%)',
        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 30px 30px',
    };

    const dotWhitePattern = {
        backgroundImage:
            'radial-gradient(#fff 20%, transparent 21%), radial-gradient(#fff 20%, transparent 21%)',
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0, 12px 12px',
    };

    return (
        <div
            style={kusamaPattern}
            className="min-h-screen text-black font-sans selection:bg-red-500 selection:text-white pb-20 overflow-x-hidden"
        >
            {/* Navigation */}
            <nav className="fixed w-full z-50 top-6 px-6">
                <div className="max-w-5xl mx-auto flex items-center justify-between bg-white border-4 border-black rounded-full px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-black text-2xl tracking-tighter">
                        JK
                        <span className="text-red-500 text-3xl leading-none">
                            .
                        </span>
                    </span>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-black text-white hover:bg-red-500 hover:text-black transition-colors rounded-full p-2 border-2 border-black"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-40 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white border-4 border-black p-8 md:p-16 rounded-[3rem] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                        {/* Decorative Kusama dots inside hero */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-500 rounded-full border-4 border-black"></div>
                        <div
                            className="absolute -bottom-10 -left-10 w-40 h-40 bg-black rounded-full border-4 border-black"
                            style={dotWhitePattern}
                        ></div>
                        <div className="absolute top-1/2 right-10 w-12 h-12 bg-yellow-400 rounded-full border-4 border-black"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white font-bold text-sm border-2 border-black mb-8 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
                                <span className="w-3 h-3 rounded-full bg-red-500 animate-bounce"></span>
                                Bereit für neue Kunstwerke
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-none">
                                Hi, ich bin
                                <br />
                                Jan Kessler.
                            </h1>
                            <h2 className="text-3xl md:text-5xl font-black mb-10 inline-block bg-red-500 text-white px-6 py-2 rounded-[2rem] border-4 border-black transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                Software Engineer
                            </h2>
                            <p className="text-xl md:text-2xl font-bold max-w-2xl mb-12 flex items-center gap-3 bg-yellow-400 inline-flex px-5 py-3 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                                <Briefcase className="w-6 h-6" />
                                Lead Developer @ Ah&Oh
                            </p>

                            <div className="flex flex-wrap gap-6 mt-4">
                                <a
                                    href="#work"
                                    className="px-8 py-4 bg-black text-white font-black text-xl rounded-full border-4 border-black hover:bg-red-500 hover:text-white transition-all hover:scale-105 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
                                >
                                    Projekte ansehen
                                    <ChevronRight className="w-6 h-6" />
                                </a>
                                <a
                                    href="mailto:hello@jan-kessler.com"
                                    className="px-8 py-4 bg-white text-black font-black text-xl rounded-full border-4 border-black hover:bg-yellow-400 transition-all hover:scale-105 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
                                >
                                    <Mail className="w-6 h-6" />
                                    Kontakt
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Selected Work Section */}
            <section id="work" className="py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-16 bg-white inline-flex px-8 py-4 rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                        <Code2 className="w-10 h-10 text-red-500" />
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                            Ausgewählte Werke
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projects.map((project, idx) => (
                            <div
                                key={project.id}
                                className={`group bg-white rounded-[3rem] p-8 md:p-10 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full hover:-translate-y-2 hover:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
                                    idx % 2 === 0 ? 'rotate-1' : '-rotate-1'
                                } hover:rotate-0 relative overflow-hidden`}
                            >
                                {/* Decorative Kusama circle in background of card */}
                                <div
                                    className={`absolute -right-12 -bottom-12 w-40 h-40 rounded-full border-4 border-black opacity-20 group-hover:scale-150 transition-transform duration-700 ${
                                        idx % 2 === 0
                                            ? 'bg-red-500'
                                            : 'bg-yellow-400'
                                    }`}
                                ></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-black mb-3 uppercase tracking-tighter">
                                                {project.title}
                                            </h3>
                                            <span className="inline-block px-4 py-1.5 bg-black text-white text-sm font-bold rounded-full border-2 border-black transform -rotate-1">
                                                {project.company}
                                            </span>
                                        </div>
                                        <a
                                            href={project.link}
                                            className="bg-yellow-400 p-3 rounded-full border-4 border-black hover:bg-red-500 hover:text-white transition-colors flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1"
                                        >
                                            <ExternalLink className="w-6 h-6" />
                                        </a>
                                    </div>

                                    <p className="text-xl font-bold leading-relaxed mb-10 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 text-sm font-black rounded-full bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-20 pb-10 text-center px-6">
                <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
                    <div className="bg-white px-6 py-3 border-4 border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-bold text-black transform rotate-1">
                        © {new Date().getFullYear()} Jan Kessler. Punkt für
                        Punkt programmiert.
                    </div>
                </div>
            </footer>
        </div>
    );
}
