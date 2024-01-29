import {IMenuItem} from "@/interfaces/menuItem";

export const MenuItems: IMenuItem<string>[] = [
    {
        id: 1,
        path: '/',
        label: 'Home',
        description: 'Main page'
    },
    {
        id: 2,
        path: '/works',
        label: 'Works',
        description: 'Here you can find my works'
    },
    {
        id: 3,
        path: '/experience',
        label: 'Experience',
        description: 'Here you can see all my skills and experience'
    },
    {
        id: 4,
        path: '/contact',
        label: 'Contact Me',
        description: 'If you want to contact me, follow here...'
    }
]