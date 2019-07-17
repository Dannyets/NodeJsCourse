import { Request, Response, NextFunction } from 'express';
import { SchemaLike } from 'joi';
import { getOrThrow } from '../utils';

export function validationMiddleware(req: Request, res: Response, next: NextFunction, schema: SchemaLike) {
    if (Object.keys(req.body).length > 0) {
        const value = getOrThrow(req.body, schema, next);

        console.log('value extracted successfully: ', value);

        res.locals.value = value;
    }

    next();
}
