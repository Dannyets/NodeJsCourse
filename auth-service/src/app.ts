import express from 'express';
import cors from 'cors';
import { routes } from './controllers';
import { initPassport } from './utils';
import expressWinston from 'express-winston';
import { logUtils } from '@components/utils';

initPassport();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(expressWinston.logger(logUtils.createLoggerOptions()));

routes.forEach(({ router, route }) => app.use(route, router));

app.use(expressWinston.errorLogger(logUtils.createLoggerOptions()));

export {
    app
};
