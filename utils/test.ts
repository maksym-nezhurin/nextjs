// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor)
// }
//
// @Logger

function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor)
    }
}

// function WithTemplate(template: string, hookId: string) {
//     return function (constructor: any) {
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor();
//
//         if(hookEl) {
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h2')!.innerText = p.name;
//         }
//     }
// }

function WithTemplate(template: string, hookId: string) {
    return function<T extends { new(...args: any[]): { name: string }}> (originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                const hookEl = document.getElementById(hookId);

                if(hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h2')!.innerText = this.name;
                }
            }

        }
    }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<div><h2>Hello</h2></div>', 'app')
class Person {
    name = 'Max'

    constructor() {
        console.log('Creating person object...')
    }
}

const pers =  new Person();

console.log(pers);

function Log(target: any, propertyName: string) {
    console.log(target);
    console.log(propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Method decorator!');
    console.log(target)
    console.log(name)
    console.log(position)
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

