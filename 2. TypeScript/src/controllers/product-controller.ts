import { createDefaultRouter } from '../factories';
import { Product } from '../models';
import { productRepository } from '../repositories';

const { router } = createDefaultRouter<Product>(productRepository);

export {
    router
};