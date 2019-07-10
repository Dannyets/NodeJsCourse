import { Request, Response, NextFunction } from 'express';
// import uuid from 'uuid/v1';
import { InMemoryRepository } from '../repositories';
import { Entity } from '../models';

// let data : any[];
// let repostory: InMemoryRepository;

// function init(dataFilePath: string){
//     repostory = new InMemoryRepository(dataFilePath);
// }

// function get(req: Request, res: Response, next: NextFunction){
//     res.send(data);
// }

// function getById(req: Request, res: Response, next: NextFunction){
//     const index = res.locals.matchingIndex;

//     const entry = data[index];

//     res.status(200).send(entry);
// }

// function post(req: Request, res: Response, next: NextFunction){
//     const newEntry = req.body;
    
//     niewEntry.id = uuid();
    
//     data.push(newEntry);

//     res.status(201).send(newEntry);
// }

// function put(req: Request, res: Response, next: NextFunction){
//     const entry = req.body;        
    
//     data[res.locals.matchingIndex] = entry;

//     res.status(200).send(entry);
// }

// function remove(req: Request, res: Response, next: NextFunction){
//     const entryIndex = res.locals.matchingIndex;

//     data.splice(entryIndex, 1);

//     res.sendStatus(204);
// }

// function tryFindById(req: Request, res: Response, next: NextFunction){
//     const { id } = req.params;

//     const matchingIndex = data.findIndex(entry => entry.id === id);

//     if(matchingIndex < 0){
//         res.sendStatus(404);
//         return;
//     }

//     res.locals.matchingIndex = matchingIndex;
//     next();
// }

// export {
//     init,
//     get,
//     getById,
//     post,
//     put,
//     remove,
//     tryFindById
// };

class CrudService<T extends Entity> {
    repository: InMemoryRepository<T>;
    constructor(dataFilePath: string) {
        this.repository = new InMemoryRepository<T>(dataFilePath);
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