import passport from 'passport';
import { UserRole, UserToken } from '../models';
import { Request, Response, NextFunction } from 'express';

export function authenticate(callback?: (...args: any[]) => any) {
  return passport.authenticate('jwt', { session: false }, callback);
}

export function authorize(roles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
        return res.sendStatus(401);
    }

    const user = req.user as UserToken;

    if (!roles.find(r => user.roles.indexOf(r) >= 0)) {
        return res.sendStatus(403);
    }

    return res.sendStatus(200);
  };
}

export function auth(roles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    authenticate((err: Error, user: UserToken) => {
      if (err || !user) {
        return res.sendStatus(401);
      }

      req.login(user, { session: false }, (error) => {
        if (error) {
          next(error);
          return;
        }

        if (!req.isAuthenticated()) {
          return res.sendStatus(401);
        }

        if (roles.length > 0 && !roles.find(r => user.roles.indexOf(r) >= 0)) {
          return res.sendStatus(403);
        }

        return res.sendStatus(200);
      });
    })(req, res);
  };
}
