
// Example of use Generic
export function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value ' + obj[key]
}

const objEx = {
    hello: 'world'
}

extractAndConvert(objEx, "hello");

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item) {
        this.data.push(item);
    }

    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('hello')
textStorage.addItem('hello 2')
textStorage.removeItem('hello 2')
textStorage.addItem({ 1: 'hello 2' })
textStorage.addItem(22)


const promise: Promise<number | string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('12')
    }, 200)
})

promise.then(value => console.log(value))


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date
}

function createCurseGoal(
    title: string,
    description: string,
    completeUntil: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal as CourseGoal;
} {

}

const names: Readonly<string[]> = ['Max', 'Sports'];
// names.push('Manu')

interface Data {
    group: number;
    name: string;
}

const data: Data[] = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
]

interface IGroup<T> {
    [key: string]: T[]
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
    return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];

        if(Array.isArray(curEl)) {
            curEl.push(item)
        } else {
            curEl = [item]
        }
        map[itemKey] = curEl;
        return map;
    }, {})
}

const res4 = group<Data>(data, 'group');

interface Role {
    name: string
}
interface Permission {
    endDate: Date;
}
interface User {
    name: string;
    roles: Role[],
    permission: Permission;
}

const user: User = {
    name: 'Vasya',
    roles: [],
    permission: {
        endDate: new Date()
    }
};
const nameUser = user['name'];
const rolesNames = 'roles'; // the next string is also equal
// let rolesNames: 'roles' = 'roles';

type rolesType = User['roles'];
type rolesType2 = User[typeof rolesNames];
type roleType = User['roles'][number]
type dateType = User['permission']['endDate']

const roles = ['admin', 'user', ' super-users'] as const;
type roleTypes = typeof roles[number];