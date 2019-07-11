import { Entity } from './entity';

export interface Repository<T extends Entity> {
    get: () => T[];
    getById: (id: string) => T;
    add: (entity: T) => T;
    update: (entity: T) => void;
    remove: (id: string) => void;
    findEntityIndex: (id: string) => number;
    isExists: (id: string) => boolean;
    getFiltered: (filter: (value: T) => boolean) => T[];
}