import { Product } from '../models';
import { productRepository } from '../repositories';
import { projectSchema } from '../validation';
import { createLogger, createDefaultRouter } from '../common';

const logger = createLogger('product-controller');

const { router } = createDefaultRouter<Product>(productRepository, logger, projectSchema);

export {
    router
};
