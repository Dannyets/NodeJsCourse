import { Artist } from '../models';
import { artistRepository, songRepository } from '../repositories';
import { artistSchema } from '../validation';
import { createDefaultRouter, createLogger } from '@common/factories';

const logger = createLogger('artist-controller');

const { router, crudService } = createDefaultRouter<Artist>(artistRepository, logger, artistSchema);

router.get('/:id/products', crudService.tryFindById, (req, res) => {
    const { id: artistId } = req.params;

    const songs = songRepository.getFiltered((p) => p.artistId === artistId);

    return res.status(200).send(songs);
});

export {
    router
};
