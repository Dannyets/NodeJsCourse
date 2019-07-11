import { InMemoryRepository } from './in-memory-repository';
import { Product } from '../models';

const dataFilePath = `${__dirname}/../data/products.json`;

const productRepository = new InMemoryRepository<Product>(dataFilePath);

export {
    productRepository
};