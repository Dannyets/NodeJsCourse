import { router as authRouter } from './auth.controller';

const routes = [
    {
        route: '/api/auth',
        router: authRouter,
    },
];

export {
    routes
};
