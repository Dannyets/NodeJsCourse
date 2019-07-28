import axios from 'axios';

function isAuthenticated(accessibleForRoles: string[], authToken: string) {
    const config = {
        headers: {
            Authorization: authToken,
        },
    };

    return axios.post(`${process.env.AUTH_SERVICE_BASE_URL}/api/auth/access`, accessibleForRoles, config);
}

export default {
    isAuthenticated,
};
