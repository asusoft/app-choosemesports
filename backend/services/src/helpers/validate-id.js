export const isValidId = value => {
    const re = /^[^/]{1,1500}$/;
    return re.test(value); 
};