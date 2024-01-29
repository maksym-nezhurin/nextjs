interface User {
    name: string;
    age?: number;
    email: string;
}

type partial = Partial<User>;

const p: partial = {}; // Not good practice, but right
type required = Required<User>;
type readonly = Required<Readonly<User>>;

interface PaymentPersistent {
    id: string;
    sum: number;
    from: string;
    to: string;
}

type Payment = Omit<PaymentPersistent, 'id'>

type ExtractEx = Extract<'from' | 'to' | Payment, string>;
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>;

class User2 {
    constructor(public id: number, public name: string) {}
}

function getData(id: number): User2 {
    return new User2(id, 'Vasya')
}

type RT = ReturnType<typeof getData>;
type RT2 = ReturnType<() => void>;
type RT3 = ReturnType<<T>() => T>;
type RT4 = ReturnType<<T extends string>() => T>;

type PT = Parameters<typeof getData>;
type first  = PT[0];

type CP = ConstructorParameters<typeof User2>;
type IT = InstanceType<typeof User2>;