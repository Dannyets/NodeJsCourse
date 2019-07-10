import { createDefaultRouter } from '../factories';
import { Product } from '../models';

const dataFilePath = `${__dirname}/../data/products.json`;

const { router } = createDefaultRouter<Product>(dataFilePath);

export {
    router
};