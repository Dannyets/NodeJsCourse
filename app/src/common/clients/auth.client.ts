import axios from 'axios';
import { configUtils } from '@common/utils';
import { ConfigKey } from '@common/models';

function isAuthenticated(accessibleForRoles: string[], authToken: string) {
    const reqConfig = {
        headers: {
            Authorization: authToken,
        },
    };

    const baseUrl = configUtils.get(ConfigKey.AuthClientBaseUrl);

    return axios.post(`${baseUrl}/api/auth/access`, accessibleForRoles, reqConfig);
}

export default {
    isAuthenticated,
};
