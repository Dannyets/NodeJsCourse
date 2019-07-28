import { Credential } from './credential';

export interface UserCredential extends Credential {
    userId: number;
}
