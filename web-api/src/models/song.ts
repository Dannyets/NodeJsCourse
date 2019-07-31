import { Entity } from '@common/models';

export interface Song extends Entity {
    artistId: string;
    name: string;
}
