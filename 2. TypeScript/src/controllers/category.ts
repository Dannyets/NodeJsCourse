import { createDefaultRouter } from '../factories';
import { Category } from '../models';

const dataFilePath = `${__dirname}/../data/categories.json`;

const { router, crudService } = createDefaultRouter<Category>(dataFilePath);

router.get('/:id/products', crudService.tryFindById, (req, res) => {
    const { id: categoryId } = req.params;

});

export {
    router
};