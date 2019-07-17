import { createDefaultRouter } from '../factories';
import { Product } from '../models';
import { repositories } from '../repositories';
import { projectSchema } from '../validation';
import { createLogger } from '../utils';

const logger = createLogger('product-controller');

const { router } = createDefaultRouter<Product>(repositories.product, logger, projectSchema);

export {
    router
};
