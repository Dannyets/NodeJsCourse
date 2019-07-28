import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

export const securityMiddleware = (accessibleForRoles: string[]) =>
                                        (req: Request, res: Response, next: NextFunction) => {
    const config = {
        headers: {
            Authorization: req.headers.authorization,
        },
    };

    axios.post('http://localhost:3000/api/auth/access', accessibleForRoles, config)
         .then(response => { next(); })
         .catch(next);
};
