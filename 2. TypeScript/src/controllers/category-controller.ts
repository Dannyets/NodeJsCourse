import { createDefaultRouter } from '../factories';
import { Category } from '../models';
import { categoryRepository, productRepository } from '../repositories';

const { router, crudService } = createDefaultRouter<Category>(categoryRepository);

router.get('/:id/products', crudService.tryFindById, (req, res) => {
    const { id: categoryId } = req.params;

    const products = productRepository.getFiltered((p) => p.categoryId === categoryId);

    return res.status(200).send(products);
});

export {
    router
};