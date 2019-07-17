import { createDefaultRouter } from '../factories';
import { Product } from '../models';
import { repositories } from '../repositories';
import { projectSchema } from '../validation';

const { router } = createDefaultRouter<Product>(repositories.product, projectSchema);

export {
    router
};
