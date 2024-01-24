import { SkillName } from "@/constants/skills";
import {IImage} from "@/interfaces/image";

interface ITechnology {
    description: string,
    image: IImage
}

export const Technologies: Record<SkillName, ITechnology> = {
    ReactJS: {
        image: {
            src: '/images/react.png',
            title: 'ReactJS ...'
        },
        description: 'ReactJS, or simply React, is an open-source JavaScript library developed and maintained by Facebook. It is widely used for building user interfaces, especially for single-page applications where the content is updated dynamically without requiring a full page reload.'
    },
    JavaScript: {
        image: {
            src: '/images/javascript.png',
            title: ''
        },
        description: '',
    },
    Redux: {
        image: {
            src: '/images/redux.png',
            title: ''
        },
        description: '',
    },
    NodeJS: {
        image: {
            src: '/images/nodejs.png',
            title: ''
        },
        description: '',
    },
    CSS: {
        image: {
            src: '/images/css.jpeg',
            title: ''
        },
        description: '',
    },
    SCSS: {
        image: {
            src: '/images/scss.png',
            title: ''
        },
        description: '',
    },
    PHP: {
        image: {
            src: '/images/php.png',
            title: ''
        },
        description: '',
    },
    HTML: {
        image: {
            src: '/images/html.png',
            title: ''
        },
        description: '',
    },
    PhaserJS: {
        image: {
            src: '/images/phaser.png',
            title: ''
        },
        description: '',
    },
    ReactRouter: {
        image: {
            src: '/images/reactrouter.webp',
            title: ''
        },
        description: '',
    },
    NextJS: {
        image: {
            src: '/images/nextjs.png',
            title: 'bla bla'
        },
        description: '',
    },
    NestJS: {
        image: {
            src: '/images/nest.png',
            title: 'Nest'
        },
        description: 'Nest',
    },
    Angular: {
        image: {
            src: '/images/angular.png',
            title: ''
        },
        description: '',
    },
    Vue: {
        image: {
            src: '/images/vue.jpeg',
            title: ''
        },
        description: '',
    },
   /* GitHub: {
        image: {
            src: 'images/github.jpeg',
            title: ''
        }
    },
    GitHubActions: {
        image: {
            src: 'images/githubactions.png',
            title: ''
        }
    }*/
}