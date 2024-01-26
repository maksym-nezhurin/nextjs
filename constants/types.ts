type Baby = {
    type: 'newborn',
    kindergarden: string,
    age: number,
    mother: string
}

type Schoolchild = {
    type: 'schoolchild',
    school: string
}

type Adult = {
    type: 'adult',
    profession: string
}

type Human = {
    age,
    gender: 'male' | 'female'
} & (Baby | Schoolchild | Adult);

enum Roles {
    Admin,
    User,
    SuperAdmin
}

type Role = {
    id: Roles,
    roleName: 'admin' | 'user',
    permissions: string[]
}

type HumanWithRole = Human & Role;

const Max:Human = {
    age: 11,
    gender: "male",
    type: "adult",
    profession: 'ss'
}

const Milana:HumanWithRole = {
    age: 5,
    gender: 'female',
    type: "newborn",
    mother: 'Mariya',
    kindergarden: 'poland one',
    roleName: 'user',
    id: Roles.User,
    permissions: ['allow to do something']
}

interface IUser {
    name: string,
    log: (id: number) => void
}

interface IUser {
    surname: string
}

interface UserDic {
    [index: number]: IUser
}

const dictionary:UserDic = {
    1: {
        name: 's',
        surname: 's',
        log: () => {}
    }
};

interface User {
    name: string
}
interface Admin {
    name: string;
    role: number;
}

function userIsAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin) {
    if (userIsAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('user is not admin')
    }
}

// const user11: User = {
//     name: 'Max',
// };

// console.log('user11', user11)

interface UserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    }
}

const usr: UserPro = {
    login: 'ss',
    password: {
        type: 'primary'
    }
}

function testPass(user: UserPro) {
    const t = user.password?.type;
}

// const currencySigns = ['₽', '€', '£'];

type CurrencySign = '₽' | '€' | '£';

const currencySigns: ReadonlyArray<CurrencySign> = ['₽', '€', '£'];

class User1 {
    skills: string[] = [];
    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
        }
    }
}

new User1().addSkill('s')
new User1().addSkill(['2s'])


