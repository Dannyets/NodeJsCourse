import { Request, Response, NextFunction } from 'express';

function validateId(req: Request, res: Response, next: NextFunction){
    const { id } = req.params;
        
    if(!id || id.length !== 36){
        res.sendStatus(404);
        return;
    }

    if(id.length < 3){
        res.sendStatus(409);
        return;
    }

    next();
}

export {
    validateId
};