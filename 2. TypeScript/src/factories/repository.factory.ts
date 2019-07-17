import { Entity, Repository } from '../models';
import { createClass } from './class.factory';

function createRepository<T extends Entity>(type: (new (...args: any[]) => Repository<T>),
                                            ...args: any[]): Repository<T> {
    const repo =  createClass(type, ...args);

    return repo;
}

export {
    createRepository
};
