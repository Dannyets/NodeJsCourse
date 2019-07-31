import { router as songRouter } from './song.controller';
import { router as artistRouter } from './artist.controller';
import { Route } from '@common/models';

const routes: Route[] = [
    {
        route: '/api/song',
        router: songRouter,
    },
    {
        route: '/api/artist',
        router: artistRouter,
    },
];

export {
    routes
};
