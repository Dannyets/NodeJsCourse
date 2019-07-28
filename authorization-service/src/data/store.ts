import { UserCredential, UserRole } from '../models';

export interface Store {
    credentials: UserCredential[];
}

export const store: Store = {
    credentials: [
        {
            userId: 1,
            email: 'dannyets@gmail.com',
            password: '12345',
            roles: [ UserRole.Reader ],
        },
    ],
};
