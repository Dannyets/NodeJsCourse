import axios from 'axios';
import { config } from '../utils';
import { ConfigKey } from '../models';

function isAuthenticated(accessibleForRoles: string[], authToken: string) {
    const reqConfig = {
        headers: {
            Authorization: authToken,
        },
    };

    const baseUrl = config.get(ConfigKey.AuthClientBaseUrl);

    return axios.post(`${baseUrl}/api/auth/access`, accessibleForRoles, reqConfig);
}

export default {
    isAuthenticated,
};
