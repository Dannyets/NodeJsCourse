import { CrudService } from '../services';
import express, { RequestHandler } from 'express';
import { Entity, Repository, ConfigKey } from '../models';
import { SchemaLike } from 'joi';
import { validationMiddleware, securityMiddleware } from '../middlewares';
import { Logger } from 'winston';
import { config } from '../utils';

function createDefaultRouter<T extends Entity>(repository: Repository<T>,
                                               logger: Logger,
                                               validationSchema?: SchemaLike) {
    const crudService = new CrudService<T>(repository, logger);

    const router = express.Router();

    if (validationSchema) {
        router.use((req, res, next) => validationMiddleware(req, res, next, validationSchema));
    }

    router.get('/', crudService.get);

    router.get('/:id', crudService.tryFindById, crudService.getById);

    const securityHandlers: RequestHandler[] = [];

    const shouldAuthenticate = config.get<boolean>(ConfigKey.ShouldAuthenticate);

    if (shouldAuthenticate) {
        securityHandlers.push(securityMiddleware(['reader']));
    }

    router.post('/', ...securityHandlers, crudService.post);

    router.put('/:id', ...securityHandlers, crudService.tryFindById, crudService.put);

    router.delete('/:id', ...securityHandlers, crudService.tryFindById, crudService.remove);

    return {
        crudService,
        router,
    };
}

export {
    createDefaultRouter
};
