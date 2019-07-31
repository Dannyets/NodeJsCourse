import { Product } from '../models';
import { productRepository } from '../repositories';
import { projectSchema } from '../validation';
import { createDefaultRouter, createLogger } from '@common/factories';

const logger = createLogger('product-controller');

const { router } = createDefaultRouter<Product>(productRepository, logger, projectSchema);

export {
    router
};
