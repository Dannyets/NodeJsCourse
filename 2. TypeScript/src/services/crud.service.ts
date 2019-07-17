import { Request, Response, NextFunction } from 'express';
import { Entity, Repository } from '../models';

class CrudService<T extends Entity> {
    constructor(private repository: Repository<T>) {
    }

    public get = (req: Request, res: Response, next: NextFunction) => {
        this.repository
            .get()
            .then((data) => {
                res.send(data);
            })
            .catch(next);
    }

    public getById = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        this.repository
            .getById(id)
            .then((entry) => {
                res.status(200).send(entry);
            })
            .catch(next);

    }

    public post = (req: Request, res: Response, next: NextFunction) => {
        const entry = res.locals.value;

        this.repository
            .add(entry)
            .then((newEntry) => {
                res.status(201).send(newEntry);
            })
            .catch(next);
    }

    public put = (req: Request, res: Response, next: NextFunction) => {
        const entry = res.locals.value;

        this.repository
            .update(entry)
            .then((updatedEntry) => {
                res.status(200).send(updatedEntry);
            })
            .catch(next);
    }

    public remove = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        this.repository
            .remove(id)
            .then(() => {
                res.sendStatus(204);
            })
            .catch(next);
    }

    public tryFindById = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        this.repository
            .isExists(id)
            .then((entityExists) => {
                if (!entityExists) {
                    res.sendStatus(404);
                    return;
                }

                next();
            })
            .catch(next);
    }
}

export {
    CrudService
};
