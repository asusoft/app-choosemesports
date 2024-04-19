import { faker } from '@faker-js/faker'

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
