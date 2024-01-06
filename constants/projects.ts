enum ProjectStatus {
    finished,
    progress,
    new
}

export interface IProject {
    id: number | string,
    status: keyof typeof ProjectStatus,
    name: string,
    description?: string,
    company: string,
    duration: number,
    className?: string,
    site?: string,
    finishedAt: string | number
}

export const projectsItems:IProject[]  = [
    {
        id: 1,
        status: "finished",
        name: 'WeWork',
        company: 'SoftServe',
        duration: 3,
        description: 'International coworking company',
        finishedAt: '2024'
        // finishedAt: new Date('December 31, 2024')
    },
    {
        id: 2,
        status: "finished",
        name: 'Iris',
        company: 'CodeIt',
        duration: 0.5,
        description: 'Financial Canadian company',
        finishedAt: 2020
    },
    {
        id: 4,
        status: "finished",
        name: 'AHub',
        company: 'CodeIt',
        duration: 0.8,
        site: 'https://ahub.com/',
        description: 'Agricultural american company. Was working on the home page',
        finishedAt: 2020
    },
    {
        id: 5,
        status: "finished",
        name: 'SweetRush',
        company: 'CodeIt',
        duration: 0.4,
        site: 'https://www.sweetrush.com/',
        description: 'Took a part in creating projects for physics, history, and mathematics lessons, written with React, Redux, and PhaserJS technologies as a coworker',
        finishedAt: 2020
    },
    {
        id: 6,
        status: "finished",
        name: 'Casino (CardsChat)',
        company: 'CodeIt',
        duration: 1,
        site: 'https://www.cardschat.com/',
        description: 'Casino forum project',
        finishedAt: 2019
    },
    {
        id: 3,
        status: "finished",
        name: 'Music Lessons',
        company: 'Upwork',
        duration: 2,
        description: 'Musical lessons for the students fron Carter Dewberry',
        site: 'https://carterdewberry.bandcamp.com/',
        finishedAt: 2021
    },
]