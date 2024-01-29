class Resp<D extends string, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        this.data = data;
        this.error = error
    }
}

// new Resp<string, number>('data', 0)
const res = new Resp('data', 3)

class HTTPResp<F> extends Resp<string, number>{
    code: F | undefined;

    constructor() {
        super('hello world', 2);
    }

    setCode(code: F) {
        this.code = code
    }
}

const res2 = new HTTPResp<string>();
res2.setCode('dd');