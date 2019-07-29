import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { IVerifyOptions } from 'passport-local';
import { ConfigKey } from '../models';
import { auth } from '../utils';
import { configUtils } from '@components/utils';
import { UserRole } from '@components/models';

const router = express.Router();

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', { session: false }, (err: Error, user: any, info: IVerifyOptions) => {
        if (err || !user) {
            return res.status(400).send({
                message: 'Failed',
                user,
            });
        }

        req.login(user, { session: false }, (error) => {
            if (error) {
                return res.send(error);
            }

            const jwtSecret = configUtils.get<string>(ConfigKey.JwtSecret) || '';

            jwt.sign(user, jwtSecret, (jwtError: Error, token: string) => {
                if (jwtError) {
                    return res.send(error);
                } else {
                    return res.send({ user, token });
                }
            });
        });
    })(req, res);
});

router.post('/access', (req: Request, res: Response, next: NextFunction) => {
    const roles = req.body as UserRole[];

    return auth(roles)(req, res, next);
});

export {
    router
};
