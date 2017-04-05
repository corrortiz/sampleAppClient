export const emailV = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;


const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength10 = maxLength(10);

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
