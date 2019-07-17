import { createDefaultRouter } from '../factories';
import { Category } from '../models';
import { repositories } from '../repositories';
import { categorySchema } from '../validation';

const { router, crudService } = createDefaultRouter<Category>(repositories.category, categorySchema);

router.get('/:id/products', crudService.tryFindById, (req, res) => {
    const { id: categoryId } = req.params;

    const products = repositories.product.getFiltered((p) => p.categoryId === categoryId);

    return res.status(200).send(products);
});

export {
    router
};
