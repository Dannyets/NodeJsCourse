import express from 'express';
import cors from 'cors';
import { routes } from './controllers';
import {
    logMiddleware,
    joiErrorHandlerMiddleware,
    createLoggerOptions
} from './common';
import expressWinston from 'express-winston';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(expressWinston.logger(createLoggerOptions()));

app.use(logMiddleware);
app.use(joiErrorHandlerMiddleware);

routes.forEach(({ router, route }) => app.use(route, router));

app.use(expressWinston.errorLogger(createLoggerOptions()));

export {
    app
};
