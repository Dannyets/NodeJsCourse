import { router as productRouter } from './product.controller';
import { router as categoryRouter } from './category.controller';

const routes = [
    {
        route: '/api/product',
        router: productRouter
    },
    {
        route: '/api/category',
        router: categoryRouter
    }
];

export {
    routes
};