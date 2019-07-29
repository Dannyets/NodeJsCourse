import { Entity, Repository } from '@common/models';
import { createClass } from '@common/factories';

function createRepository<T extends Entity>(type: (new (...args: any[]) => Repository<T>),
                                            ...args: any[]): Repository<T> {
    const repo =  createClass(type, ...args);

    return repo;
}

export {
    createRepository
};
