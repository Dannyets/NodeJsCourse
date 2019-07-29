import express from 'express';
import cors from 'cors';
import { routes } from './controllers';
import { logMiddleware, joiErrorHandlerMiddleware, alignedWithColorsAndTime } from './common';
import expressWinston from 'express-winston';
import winston from 'winston';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: alignedWithColorsAndTime,
}));

app.use(logMiddleware);
app.use(joiErrorHandlerMiddleware);

routes.forEach(({ router, route }) => app.use(route, router));

app.use(expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json(),
    ),
}));

export {
    app
};
