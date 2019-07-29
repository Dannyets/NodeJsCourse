import { InMemoryRepository } from '@components/repositories';
import { createRepository } from '@components/factories';
import { UserCredential } from '../models';

const userCredentialsRepository = createRepository<UserCredential>(
    InMemoryRepository,
    'userCredential',
    `${__dirname}/../data/userCredentials.json`,
);

export {
    userCredentialsRepository
};
