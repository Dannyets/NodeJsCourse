import { CrudService, requestValidator } from '../services';
import express from 'express';

const { validateId } = requestValidator;

function createDefaultRouter<T>(dataFilePath: string){
    const crudService = new CrudService(dataFilePath);

    const router = express.Router();

    router.get('/', crudService.get);

    router.get('/:id', validateId, crudService.tryFindById, crudService.getById);

    router.post('/', crudService.post);

    router.put('/:id', validateId, crudService.tryFindById, crudService.put);

    router.delete('/:id', validateId, crudService.tryFindById, crudService.remove);

    return {
        crudService,
        router
    };
}

export {
    createDefaultRouter
};