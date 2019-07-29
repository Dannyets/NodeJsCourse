import { Credential } from './credential';
import { Entity } from '@components/models';

export interface UserCredential extends Credential, Entity {
    userId: number;
}
