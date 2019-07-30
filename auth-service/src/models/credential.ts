import { UserToken } from './userToken';

export interface Credential extends UserToken {
  password: string;
}
