import { InMemoryRepository } from './in-memory-repository';
import { Category } from '../models';

const dataFilePath = `${__dirname}/../data/categories.json`;

const categoryRepository = new InMemoryRepository<Category>(dataFilePath);

export {
    categoryRepository
};