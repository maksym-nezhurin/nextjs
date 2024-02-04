interface IForm {
    name: string;
    password: string;
}

const form: IForm = {
  name: 'Vasya',
  password: '123'
};

const formValidationMapTypes: Validation<IForm> = {
    name: {
        isValid: true
    },
    password: {
        isValid: false,
        errorMessage: 'Should be more than 5 symbols'
    }
}

type Validation<T> = {
    [K in keyof T]: {
        isValid: true;
    } | {
        isValid: false;
        errorMessage: string;
    }
}
