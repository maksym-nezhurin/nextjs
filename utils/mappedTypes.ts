import {Property} from "csstype";

type Modifier = ' read' | 'update' | 'create';

type UserRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
    +readonly [Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessadminPanel'>]-?: boolean // -? - non required, +? required
}

type userAccess2 = ModifierToAccess<UserRoles>;

type UserAccess1 = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean,
}