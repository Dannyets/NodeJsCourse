import { InMemoryRepository } from '@common/repositories';
import { createRepository } from '@common/factories';
import { Category } from '../models';

const categoryRepository = createRepository<Category>(
    InMemoryRepository,
    'category',
    `${__dirname}/../data/categories.json`,
);

export {
    categoryRepository
};
