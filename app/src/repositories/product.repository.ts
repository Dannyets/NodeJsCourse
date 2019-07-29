import { createRepository } from '@common/factories';
import { InMemoryRepository } from '@common/repositories';
import { Product } from '../models';

const productRepository = createRepository<Product>(
    InMemoryRepository,
    'product',
    `${__dirname}/../data/products.json`,
);

export {
    productRepository
};
