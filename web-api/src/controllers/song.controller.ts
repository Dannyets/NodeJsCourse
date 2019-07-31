import { Song } from '../models';
import { songRepository } from '../repositories';
import { songSchema } from '../validation';
import { createDefaultRouter, createLogger } from '@common/factories';

const logger = createLogger('song-controller');

const { router } = createDefaultRouter<Song>(songRepository, logger, songSchema);

export {
    router
};
