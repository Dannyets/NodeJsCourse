import { router as authorizationRouter } from './authorization.controller';

const routes = [
    {
        route: '/api/auth',
        router: authorizationRouter,
    },
];

export {
    routes
};
