import express from 'express';
import cors from 'cors';
import { routes } from './controllers';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.all('*', (req, res, next) => {
    console.log('Request recieved', req.url);
    next();
});

routes.forEach(({ router, route }) => app.use(route, router));

export {
    app
};