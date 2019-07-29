import express from 'express';
import cors from 'cors';
import { routes } from './controllers';
import expressWinston from 'express-winston';
import { logMiddleware, joiErrorHandlerMiddleware } from '@common/middlewares';
import { logUtils } from '@common/utils';
import { Route } from '@common/models';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(expressWinston.logger(logUtils.createLoggerOptions()));

app.use(logMiddleware);
app.use(joiErrorHandlerMiddleware);

routes.forEach(({ router, route }: Route) => app.use(route, router));

app.use(expressWinston.errorLogger(logUtils.createLoggerOptions()));

export {
    app
};
