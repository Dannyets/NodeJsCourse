import { router as productRouter } from './product.controller';
import { router as categoryRouter } from './category.controller';
import { Route } from '@common/models';

const routes: Route[] = [
    {
        route: '/api/song',
        router: productRouter,
    },
    {
        route: '/api/category',
        router: categoryRouter,
    },
];

export {
    routes
};
