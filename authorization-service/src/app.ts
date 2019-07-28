import express from 'express';
import cors from 'cors';
import { routes } from './controllers';
import { createLoggerOptions, initPassport } from './utils';
import expressWinston from 'express-winston';

initPassport();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(expressWinston.logger(createLoggerOptions()));

routes.forEach(({ router, route }) => app.use(route, router));

app.use(expressWinston.errorLogger(createLoggerOptions()));

export {
    app
};
