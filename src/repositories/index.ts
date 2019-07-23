import { InMemoryRepository } from './in-memory.repository';
import { Product, Category } from '../models';
import { createRepository } from '../factories';

const repositories = {
    product: createRepository<Product>(InMemoryRepository, 'product', `${__dirname}/../data/products.json`),
    category: createRepository<Category>(InMemoryRepository, 'category', `${__dirname}/../data/categories.json`),
};

export {
    repositories
};
