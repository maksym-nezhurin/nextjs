enum ProjectStatus {
    finished,
    progress,
    new
}

type Country = 'US' | 'Australia' | 'Canada' | 'United Kingdom' | 'Germany' | 'Ukraine' | 'Russia' | 'Romania' | 'Belgium';

export interface IProject {
    id: number | string,
    status: keyof typeof ProjectStatus,
    name: string,
    description?: string,
    company: string,
    duration: number,
    country: Country,
    className?: string,
    site?: string,
    nda: boolean,
    url?: string,
    finishedAt: string | number
}

export const projectsItems:IProject[]  = [
    {
        id: 15,
        status: "finished",
        name: 'WeWork',
        company: 'SoftServe',
        country: "US",
        duration: 36,
        description: 'International coworking company with a lot of branches and offices around a world',
        finishedAt: '2024',
        nda: true
        // finishedAt: new Date('December 31, 2024')
    },
    {
        id: 14,
        status: "finished",
        name: 'Iris',
        company: 'CodeIt',
        country: 'Canada',
        duration: 4,
        description: 'Financial Canadian company',
        nda: true,
        finishedAt: 2021
    },
    {
        id: 13,
        status: "finished",
        name: 'AHub',
        company: 'CodeIt',
        country: 'US',
        duration: 2,
        site: 'https://ahub.com/',
        description: 'Agricultural american company. Was working on the home page',
        nda: false,
        finishedAt: 2020
    },
    {
        id: 12,
        status: "finished",
        name: 'SweetRush',
        company: 'CodeIt',
        country: 'US',
        duration: 8,
        site: 'https://www.sweetrush.com/',
        description: 'Took a part in creating projects for physics, history, and mathematics lessons, written with React, Redux, and PhaserJS technologies as a coworker',
        nda: true,
        finishedAt: 2020
    },
    {
        id: 11,
        status: "finished",
        name: 'Casino (CardsChat)',
        company: 'CodeIt',
        country: 'United Kingdom',
        duration: 12,
        site: 'https://www.cardschat.com/',
        description: 'Casino forum project',
        nda: true,
        finishedAt: 2019
    },
    {
        id: 10,
        status: "finished",
        name: 'Music Lessons',
        country: 'US',
        company: 'Upwork',
        duration: 18,
        description: 'Musical lessons for the students fron Carter Dewberry',
        site: 'https://carterdewberry.bandcamp.com/',
        nda: true,
        finishedAt: 2021
    },
    {
        id: 9,
        status: "finished",
        name: 'InvestFast/Connexian',
        company: 'InvestFast',
        duration: 9,
        country: 'Australia',
        description: 'The Australian technology platform for direct investing to the funds market',
        site: 'https://www.connexian.com/',
        nda: false,
        finishedAt: 2019
    },
    {
        id: 8,
        status: "finished",
        name: 'Javascript Widget (Bot)',
        company: 'Upwork',
        duration: 4,
        country: 'United Kingdom',
        description: 'Front end developer needed for improvements on Javascript Widget',
        site: 'https://www.livechat.com/',
        nda: false,
        finishedAt: 2019
    },
    {
        id: 7,
        status: "finished",
        name: 'Travel site',
        company: 'Upwork',
        duration: 2,
        country: 'Romania',
        description: 'Travel website',
        nda: false,
        finishedAt: 2018
    },
    {
        id: 6,
        status: "finished",
        name: 'Tante Minna',
        company: 'Upwork',
        duration: 2,
        country: 'Germany',
        description: 'Implement landing page regarding all users wishes',
        site: 'https://www.tante-minna.de',
        nda: false,
        finishedAt: 2019
    },
    {
        id: 5,
        status: "finished",
        name: 'PSD to HTML (LayerSlider)',
        company: 'Signalstark',
        duration: 10,
        country: 'Germany',
        description: 'A lot of small sites was converted from PSD to HTML for my good client Philipp Tauscher',
        site: 'signalstark.com',
        nda: false,
        finishedAt: 2018
    },
    {
        id: 4,
        status: "finished",
        name: 'Prediction AI',
        company: 'Greenlamp (Scott Shep)',
        duration: 3,
        country: 'US',
        description: 'Created small lottery functionality, that provide random combination of values',
        nda: false,
        finishedAt: 2018
    },
    {
        id: 3,
        status: "finished",
        name: 'HTML CSS Bootstrap',
        company: 'Upwork',
        duration: 2,
        country: 'Belgium',
        description: 'PSD to HTML website',
        site: 'https://www.AltoChange.com',
        nda: false,
        finishedAt: 2017
    },
    {
        id: 16,
        status: "finished",
        name: 'Nordic Pro',
        company: 'Freelance',
        duration: 3,
        country: 'Russia',
        description: 'Site for buying goods and services (Nordic walking poles). This is online shop, that exists in several cities around the country',
        site: 'https://nordicpro.ru/',
        nda: false,
        finishedAt: 2017
    },
    {
        id: 15,
        status: "finished",
        name: 'Country Vet Clinic',
        company: 'Country Vet Clinic',
        duration: 4,
        country: 'Russia',
        description: 'Vet clinic for your pets, this site I implemented from scratch without any frameworks or CMSs, it\'s successfully working since 2017',
        site: 'http://gribanovovet.ru/',
        nda: false,
        finishedAt: 2016
    },
    {
        id: 2,
        status: "finished",
        name: 'Logiforms, Prince PDF',
        company: 'Upwork',
        duration: 10,
        country: 'Australia',
        description: 'The lawyer from Australia, we had a lot of small projects related to the law documentation',
        site: 'https://app.logiforms.com/',
        nda: false,
        finishedAt: 2017
    },
    {
        id: 1,
        status: "finished",
        name: 'Snipbo',
        company: 'Snipbo',
        duration: 10,
        country: 'US',
        description: 'Social media platform for American users. The main idea of the client was to gather all possibilities provided the similar sites as YouTube, Facebook and twitter.Social media platform for American users. The main idea of the client was to gather all possibilities provided the similar sites as YouTube, Facebook and twitter.',
        site: 'https://www.snipbo.com/',
        nda: false,
        finishedAt: 2016
    }
]