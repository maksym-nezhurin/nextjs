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
    site?: string,
    finishedAt: number
}

export const projectsItems:IProject[]  = [
    {
        id: 1,
        status: "finished",
        name: 'WeWork',
        company: 'SoftServe',
        duration: 3,
        description: 'International coworking company',
        finishedAt: 2024
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