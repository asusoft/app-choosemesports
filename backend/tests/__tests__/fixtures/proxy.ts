import { beforeAll } from 'bun:test'

function createProxy<T extends object> (getter: () => T, defaultValue: any = {}): T {
    return new Proxy<T>(
        defaultValue,
        {
            get: (_, p) => {
                return (getter() as any)[p]
            },
            set: () => {
                throw new Error('Fixtures objects are readonly')
            },
            ownKeys: (_) => {
                const value = getter()
                const keys = Object.keys(value)
                if (Array.isArray(value)) {
                    keys.push('length')
                }
                return keys
            },
            getOwnPropertyDescriptor: (_, key) => {
                return Object.getOwnPropertyDescriptor(getter(), key)
            },
            deleteProperty: (_, key) => {
                throw new Error('Fixtures objects are readonly')
            },
            has: (_, key) => {
                return Object.hasOwn(getter() as any, key)
            }
        }
    )
}
export function createObjectProxy<T extends Exclude<object, unknown[]>> (
    getter: () => T
): T {
    return createProxy(getter, {})
}
export function createArrayProxy<T extends unknown[]> (
    getter: () => T
): T {
    return createProxy(getter, [])
}

export function buildObjectFixture<
    Func extends (...args: any[]) => Promise<object>
> (func: Func): (...args: Parameters<Func>) => Awaited<ReturnType<Func>> {
    return (...args) => {
        let state: Awaited<ReturnType<Func>>
        beforeAll(async () => {
            state = await func(...args) as Awaited<ReturnType<Func>>
        })
        return createObjectProxy(() => state)
    }
}

export function buildArrayFixture<
    Func extends (...args: any[]) => Promise<unknown[]>
> (func: Func): (...args: Parameters<Func>) => Awaited<ReturnType<Func>> {
    return (...args) => {
        let state: Awaited<ReturnType<Func>>
        beforeAll(async () => {
            state = await func(...args) as Awaited<ReturnType<Func>>
        })
        return createArrayProxy(() => state)
    }
}
