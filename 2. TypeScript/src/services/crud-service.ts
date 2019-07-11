import { Request, Response, NextFunction } from 'express';
import { Entity, Repository } from '../models';

class CrudService<T extends Entity> {
    repository: Repository<T>;
    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    public get = (req: Request, res: Response, next: NextFunction) => {
        const data = this.repository.get();
        
        res.send(data);
    }
    
    public getById = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        const entry = this.repository.getById(id);
    
        res.status(200).send(entry);
    }
    
    public post = (req: Request, res: Response, next: NextFunction) => {
        let newEntry = req.body;
        
        newEntry = this.repository.add(newEntry);
    
        res.status(201).send(newEntry);
    }
    
    public put = (req: Request, res: Response, next: NextFunction) => {
        const entry = req.body;
        
        this.repository.update(entry);
    
        res.status(200).send(entry);
    }
    
    public remove = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        
        this.repository.remove(id);

        res.sendStatus(204);
    }
    
    public tryFindById = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
    
        const entityExists = this.repository.isExists(id);
    
        if(!entityExists){
            res.sendStatus(404);
            return;
        }
    
        next();
    }
}

export {
    CrudService
}