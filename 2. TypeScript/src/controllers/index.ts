import { router as projectRouter } from './project';
import { router as productRouter } from './product';
import { router as categoryRouter } from './category';

const routes = [
    {
        route: '/api/project',
        router: projectRouter
    },
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