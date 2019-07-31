import { InMemoryRepository } from '@common/repositories';
import { createRepository } from '@common/factories';
import { Artist } from '../models';

export const artistRepository = createRepository<Artist>(
    InMemoryRepository,
    'artist',
    `${__dirname}/../data/artists.json`,
);
