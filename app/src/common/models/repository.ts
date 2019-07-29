import { Entity } from '@common/models';

export interface Repository<T extends Entity> {
    name: string;
    get: () => Promise<T[]>;
    getById: (id: string) => Promise<T>;
    add: (entity: T) => Promise<T>;
    update: (entity: T) => Promise<void>;
    remove: (id: string) => Promise<void>;
    findEntityIndex: (id: string) => Promise<number>;
    isExists: (id: string) => Promise<boolean>;
    getFiltered: (filter: (value: T) => boolean) => Promise<T[]>;
}
