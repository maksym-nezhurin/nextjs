type A = Awaited<Promise<string>>;
type A2 = Awaited<Promise<Promise<string>>>;

// use cases
// 1 case

interface IMenu {
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]> {
    return [{ name: 'Analytics', url: '/analytics' }]
}

type R = Awaited<ReturnType<typeof getMenu>>;

// 2 case

async function getArray<T>(x: T) {
    return [await x];
}