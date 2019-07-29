import { createRepository, InMemoryRepository } from '../common';
import { Product } from '../models';

const productRepository = createRepository<Product>(
    InMemoryRepository,
    'product',
    `${__dirname}/../data/products.json`,
);

export {
    productRepository
};
