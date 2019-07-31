import { createRepository } from '@common/factories';
import { InMemoryRepository } from '@common/repositories';
import { Song } from '../models';

export const songRepository = createRepository<Song>(
    InMemoryRepository,
    'song',
    `${__dirname}/../data/songs.json`,
);
