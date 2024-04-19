import { faker } from '@faker-js/faker'
import {  genRandomInt, genString, } from '../utils'
import { shuffleArray } from '../utils/gens'


export function genName (): string {
    return faker.person.fullName()
}

export function genLogin (): string {
    const firstLetter = faker.string.alpha({ length: 1 })
    const secondaryLetters = faker.string.alphanumeric(
        { length: { min: 3, max: 10 } }
    )
    return (firstLetter + secondaryLetters).toLowerCase()
}

export function genEmail (): string {
    return faker.internet.email()
}

export function genPassword(): string {
    const minLength = 6;
    const maxLength = 255;
    const length = genRandomInt(minLength, maxLength);

    // Define character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specialChars = '@$!%*?&';

    // Ensure at least one character from each set
    const passwordArray = [
        lowercase[genRandomInt(0, lowercase.length - 1)],
        uppercase[genRandomInt(0, uppercase.length - 1)],
        digits[genRandomInt(0, digits.length - 1)],
        specialChars[genRandomInt(0, specialChars.length - 1)]
    ];

    // Fill the rest of the password length
    const allChars = lowercase + uppercase + digits + specialChars;
    for (let i = passwordArray.length; i < length; i++) {
        passwordArray.push(allChars[genRandomInt(0, allChars.length - 1)]);
    }

    // Shuffle the array and join to form a string
    return shuffleArray(passwordArray).join('');
}