import express from 'express';
import cors from 'cors';
import { routes } from './controllers';
import { logMiddleware, joiErrorHandlerMiddleware } from './middlewares';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logMiddleware);
app.use(joiErrorHandlerMiddleware);

routes.forEach(({ router, route }) => app.use(route, router));

export {
    app
};
