import { createRepository, InMemoryRepository } from '../common';
import { Category } from '../models';

const categoryRepository = createRepository<Category>(
    InMemoryRepository,
    'category',
    `${__dirname}/../data/categories.json`,
);

export {
    categoryRepository
};
