import { faker } from '@faker-js/faker'
import { countries } from './countries'
import { Gender } from '../../generated/types/graphql'

type Length = number | { min: number, max: number }

export function genRandomInt (min: number = 1, max: number = 9): number {
    return Math.floor(Math.random() * (max - min) + min)
}

export function genString (length: Length = 255): string {
    const methods = ['alphanumeric', 'alpha'] as const
    const method = methods[genRandomInt(0, 1)]
    return faker.string[method]({ length })
}

export function genBoolean (): boolean {
    return genRandomInt(0, 1) === 1
}

export function genEmptyString (): string {
    return ' '.repeat(genRandomInt(1, 255))
}

export function possibleUndefined <T> (value: T): T | undefined {
    return genRandomInt(0, 1) === 1 ? value : undefined
}

export function genArrayFromFunc <T> (
    func: () => T,
    length: number,
    reversed: boolean = false
): T[] {
    const result: T[] = []
    for (let i = 0; i < length; i++) {
        result[reversed ? 'unshift' : 'push'](func())
    }
    return result
}

export function possibleUndefinedValue<T> (callback: () => T): T | undefined {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (genRandomInt(0, 1)) {
        return callback()
    }
}

export function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
}


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

export function genGender (): Gender {
    return Object.values(Gender)[genRandomInt(0, 1)]
}

export function genCountry (): string {
    return countries[genRandomInt(0, countries.length - 1)]
}

export function genBirthday (): Date {
    return faker.date.birthdate({ min: 18, mode: 'age' })
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
