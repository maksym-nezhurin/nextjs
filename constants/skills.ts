enum SkillStatus {
    unknown,
    incompetence,
    progress,
    competence
}

export type SkillName =
    'ReactJS'
    | 'Redux'
    | 'ReactRouter'
    | 'NodeJS'
    | 'CSS'
    | 'SCSS'
    | 'Angular'
    | 'Vue'
    | 'JavaScript'
    | 'PHP'
    | 'HTML'
    | 'PhaserJS'
    | 'NextJS'
    | 'NuxtJS'
    | 'NestJS';

export type AdditionalSkillNames =
    'Zeplin'
    | 'Figma';

export interface ISkill {
    id: number | string,
    name?: SkillName,
    description?: string,
    status: SkillStatus,
    years: number
}

export const SKILLS: Record<SkillName, ISkill> = {
    JavaScript: {
        id: 0,
        status: SkillStatus.competence,
        description: 'Versatile, dynamic scripting language for web development and interactive user experiences.',
        years: 8
    },
    ReactJS: {
        id: 1,
        status: SkillStatus.competence,
        description: 'JavaScript library for building UIs, emphasizing component-based architecture and efficiency.',
        years: 5
    },
    Redux: {
        id: 2,
        status: SkillStatus.progress,
        description: 'State management library for JavaScript apps, commonly used with ReactJS framework.',
        years: 5
    },
    NodeJS: {
        id: 3,
        status: SkillStatus.progress,
        description: 'JavaScript runtime environment for server-side applications, enabling scalable and efficient development.',
        years: 4
    },
    CSS: {
        id: 4,
        status: SkillStatus.progress,
        description: 'Cascading Style Sheets: Styles web documents for improved appearance and presentation.',
        years: 8
    },
    SCSS: {
        id: 5,
        status: SkillStatus.progress,
        description: 'SCSS (Sass): CSS preprocessor with enhanced features like variables, nesting, and mixins.',
        years: 8
    },
    PHP: {
        id: 6,
        status: SkillStatus.progress,
        description: 'PHP: Server-side scripting language for web development, widely used and versatile.',
        years: 3
    },
    HTML: {
        id: 7,
        status: SkillStatus.progress,
        description: 'HTML (HyperText Markup Language): Standard markup language for creating web pages.',
        years: 8
    },
    PhaserJS: {
        id: 8,
        status: SkillStatus.progress,
        description: 'Fast, open-source framework for 2D game development using JavaScript and HTML5.',
        years: 1
    },
    ReactRouter: {
      id: 9,
      status: SkillStatus.competence,
      description: 'Declarative navigation for React applications, enabling dynamic UI updates based on URLs.',
      years: 3
    },
    NextJS: {
        id: 10,
        status: SkillStatus.unknown,
        description: 'React framework for building server-rendered and statically generated web applications.',
        years: 0
    },
    NestJS: {
        id: 11,
        status: SkillStatus.incompetence,
        description: 'Progressive Node.js framework for building scalable server-side applications with TypeScript.',
        years: 0
    },
    Angular: {
        id: 12,
        status: SkillStatus.incompetence,
        description: 'TypeScript-based open-source framework for building web applications, developed and maintained by Google.',
        years: 0
    },
    NuxtJS: {
        id: 14,
        status: SkillStatus.progress,
        description: 'The Intuitive Vue Framework. Nuxt is an open source framework that makes web development intuitive and powerful.',
        years: 0.1
    },
    Vue: {
        id: 13,
        status: SkillStatus.unknown,
        description: 'Progressive JavaScript framework for building user interfaces, emphasizing simplicity and flexibility.',
        years: 0
    }
};

/*const reactJS: Readonly<ISkill> = {
    description: '',
    name: SkillName.ReactJS,
    status: SkillStatus.competence,
    years: 3
};

const angular: ISkill = {
    id: 98,
    description: '',
    status: SkillStatus.incompetence,
    years: 3
};*/

/*enum SkillList {
    ReactJS = '1',
    Redux = '2',
    Vue = '3',
    Angular = '4',
}*/

// interface INewSkill {
//     keySkill: keyof typeof SkillList, // If ypu want to use key of enum
//     valueSkill: SkillList, // If you want to use value of enum
// }
//
// const newSkill: INewSkill = {
//     keySkill: "ReactJS",
//     valueSkill: SkillList.ReactJS,
// }

// reactJS.description = 'sas';
// angular.description = 'sas';
