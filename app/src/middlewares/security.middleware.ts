import { Request, Response, NextFunction } from 'express';
import { authClient } from '../clients';

export const securityMiddleware = (accessibleForRoles: string[]) =>
                                  (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
        next(new Error('Empty token'));
        return;
    }

    authClient.isAuthenticated(accessibleForRoles, authToken)
         .then(() => { next(); })
         .catch(next);
};
