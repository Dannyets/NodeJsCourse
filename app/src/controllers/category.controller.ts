import { Category } from '../models';
import { categoryRepository, productRepository } from '../repositories';
import { categorySchema } from '../validation';
import { createDefaultRouter, createLogger } from '@common/factories';

const logger = createLogger('category-controller');

const { router, crudService } = createDefaultRouter<Category>(categoryRepository, logger, categorySchema);

router.get('/:id/products', crudService.tryFindById, (req, res) => {
    const { id: categoryId } = req.params;

    const products = productRepository.getFiltered((p) => p.categoryId === categoryId);

    return res.status(200).send(products);
});

export {
    router
};
