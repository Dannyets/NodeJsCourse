import { Entity } from './entity';

export interface Repository<T extends Entity> {
    get: () => T[],
    getById: (id: string) => T,
    add: (entity: T) => T,
    update: (entity : T) => unknown,
    remove: (id: string) => unknown,
    findEntityIndex: (id: string) => number,
    isExists: (id: string) => boolean,
    getFiltered: (filter: (value: T) => unknown) => T[]
}