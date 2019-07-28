import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { IVerifyOptions } from 'passport-local';
import { ConfigKey, UserToken, UserRole } from '../models';
import { config, auth } from '../utils';

const router = express.Router();
const jwtSecret = config.get(ConfigKey.JwtSecret);

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
