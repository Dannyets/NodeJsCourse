import { CrudService } from '../services';
import express from 'express';
import { Entity, Repository } from '../models';
import { SchemaLike } from 'joi';
import { validationMiddleware } from '../middlewares';

function createDefaultRouter<T extends Entity>(repository: Repository<T>,
                                               validationSchema?: SchemaLike) {
    const crudService = new CrudService<T>(repository);

    const router = express.Router();

    if (validationSchema) {
        router.use((req, res, next) => validationMiddleware(req, res, next, validationSchema));
    }

    router.get('/', crudService.get);

    router.get('/:id', crudService.tryFindById, crudService.getById);

    router.post('/', crudService.post);

    router.put('/:id', crudService.tryFindById, crudService.put);

    router.delete('/:id', crudService.tryFindById, crudService.remove);

    return {
        crudService,
        router,
    };
}

export {
    createDefaultRouter
};
