// src/projectsData.ts
import { Project } from './projectTypes';

const projects: Project[] = [
    {
        id: 1,
        title: 'Adote RS',
        description: 'Conecting people to rescue animals and a chance to help shelters to provide a good life for this animals.',
        technologies: ['next.js', 'typescript.js', 'tailwind.css'],
        techImages: ['/next.png', '/ts.png', '/tailwind.png', '/mongo.png', '/aws.png' ],
        mainImage: '/projects/adoters1.png',
        secondaryImages: ['/projects/adoters1.png', '/projects/adoters2.png', '/projects/adotepet3.png', '/projects/adotepet4.png'],
        githubLink: 'https://github.com/LucasBarragana/adoters',
        liveLink: 'https://adotepetrs.vercel.app/',
    },
    {
        id: 2,
        title: 'ST FOME',
        description: 'STFOME is a complet and realistic food ordering app.',
        technologies: ['next.js', 'typescript.js', 'tailwind.css'],
        techImages: ['/next.png', '/ts.png', '/tailwind.png', '/mongo.png', '/aws.png' ],
        mainImage: '/projects/fome1.png',
        secondaryImages: ['/projects/fome1.png', '/projects/fome3.png', '/projects/fome4.png', '/projects/fome5.png', '/projects/fome6.png', '/projects/fome7.png', '/projects/fome8.png'],
        githubLink: 'https://github.com/LucasBarragana/ST-BURGUER',
        liveLink: 'https://st-burguer.vercel.app/',
    },
    {
        id: 3,
        title: 'Car Rental',
        description: 'This project show me how to use API build for other and use some other stuf to build faster the front-end like shadcn.',
        technologies: ['next.js', 'typescript.js', 'tailwind.css'],
        techImages: ['/next.png', '/ts.png', '/tailwind.png', '/supabase.png', '/kinde.png' ],
        mainImage: '/projects/cars1.png',
        secondaryImages: ['/projects/cars1.png', '/projects/cars2.png'],
        githubLink: 'https://github.com/LucasBarragana/car-rental-front',
        liveLink: 'https://car-rental-front-fawn.vercel.app/',
    },
    {
        id: 4,
        title: 'Album of Memories',
        description: 'Family website. Developed to keep memories. Distance can keep people apart, this website can bring them closer',
        technologies: ['next.js', 'typescript.js', 'tailwind.css'],
        techImages: ['/react2.png', '/nodejs.png', '/js.png', '/redux.png', '/mongo.png' ],
        mainImage: '/projects/album1.png',
        secondaryImages: ['/projects/album1.png', '/projects/album2.png', '/projects/album3.png', '/projects/album4.png', '/projects/album5.png'],
        githubLink: 'https://github.com/LucasBarragana/Memorias',
        liveLink: 'https://github.com/LucasBarragana/Memorias',
    },
    {
        id: 5,
        title: 'Branding Landing Page',
        description: 'A page for a company specialized in paid digital traffic that aims to increase the visibility of other companies.',
        technologies: ['html', 'css.js', 'javascript'],
        techImages: ['/angular.png', '/Sass.png', '/ts.png'],
        mainImage: '/projects/tp-lp-1.png',
        secondaryImages: ['/projects/tp-lp-1.png', '/projects/tp-lp-2.png', '/projects/tp-lp-3.png', '/projects/tp-lp-4.png'],
        githubLink: 'https://github.com/LucasBarragana/lp-trafego-pago',
        liveLink: 'https://lp-trafego-pago.vercel.app/',
    },
    {
        id: 6,
        title: 'Big 3',
        description: 'This is my first project. That a build to put my knology about structure(HTML), estilization(CSS) and some functions(Javascript)',
        technologies: ['html', 'css.js', 'javascript'],
        techImages: ['/html.png', '/css.png', '/js.png'],
        mainImage: '/projects/BIG3.png',
        secondaryImages: ['/projects/BIG3.png', '/projects/anime1.png'],
        githubLink: 'https://github.com/LucasBarragana/PhilosophicalAnime',
        liveLink: 'https://philosophical-anime.vercel.app/',
    },
];

export default projects;
