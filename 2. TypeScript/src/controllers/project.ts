import { Project } from '../models';
import express, { Request, Response, NextFunction } from 'express';
import uuid from 'uuid/v1';

//TODO: MOVE THIS DATA SOMEWHERE ELSE
const projects: Project[] = [
    { id: uuid(), name: 'CodeResource' },
    { id: uuid(), name: 'CodeStat' },
];

const router = express.Router();

function findProjectIndexOrRespondNotFound(req: Request, res: Response, next: NextFunction){
    const { id } = req.params;
        
    const matchingIndex = projects.findIndex(p => p.id === id);

    if(matchingIndex < 0){
        res.sendStatus(404);
        return;
    }

    res.locals.matchingIndex = matchingIndex;
    next();
}

router.get('/', (req, res) => {
    res.send(projects);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    const matchingProject = projects.find(p => p.id === id);

    if(!matchingProject){
        res.sendStatus(404);
        return;
    }

    res.send(matchingProject);
});

router.post('/', (req, res) => {
    const project: Project = req.body;        
    project.id = uuid();

    projects.push(project);

    res.status(201).send(project);
});

router.put('/:id', 
        findProjectIndexOrRespondNotFound,
        (req, res) => {
            const project: Project = req.body;        
            projects[res.locals.matchingIndex] = project;
            res.status(200).send(project);
        }
);

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    
    const matchingIndex = projects.findIndex(p => p.id === id);

    if(matchingIndex < 0){
        res.sendStatus(404);
        return;
    }

    projects.slice(matchingIndex, 1);

    res.sendStatus(204);
});

export {
    router  
};