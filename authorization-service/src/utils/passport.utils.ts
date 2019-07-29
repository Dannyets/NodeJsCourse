import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { UserToken, ConfigKey, UserCredential } from '../models';
import { userCredentialsRepository } from '../repositories';
import { configUtils } from '@components/utils';

export function initPassport() {
  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (userName, password, callback) => {
      const users = await userCredentialsRepository.getFiltered((u: UserCredential) => u.email === userName &&
                                                                                       u.password === password);
      if (users && users.length > 0) {
        const { email, roles } = users[0];
        const token: UserToken = { email, roles };
        callback(null, token, {message: 'succeeded'});
      } else {
        callback(null, false, {message: 'failed'});
      }
    },
  ));

  passport.use(new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configUtils.get(ConfigKey.JwtSecret),
    },
    // in this case the user token is actually the same as jwtPayload
    // can consider simply passing jwtPayload, however it might be stale (common though)
    // trade-off: lightweight token vs. required info for most API's to reduce user re-query needs
    (jwtPayload: UserToken, callback) =>
      callback(null, jwtPayload),
  ));
}
