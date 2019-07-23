import { router as authorizationRouter } from './authorization.controller';

const routes = [
    {
        route: '/api/product',
        router: authorizationRouter
    },
];

export {
    routes
};