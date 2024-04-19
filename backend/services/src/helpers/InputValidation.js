import { ErrorStatus } from "./Constants.js";

const isValidPassword = value => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return re.test(value);
};

const isValidLogin = value => {
    const re = /^[a-z][a-z0-9_]*$/;
    return re.test(value); 
};

export const validateInput = async (input) => {
    if(!isValidPassword(input.password)) {
        return { status: ErrorStatus.INVALID_INPUT_DATA, fields: ['password'] };
    } else if(!isValidLogin(input.login)){
        return { status: ErrorStatus.INVALID_INPUT_DATA, fields: ['login'] };
    }
    return true;
};


  