import { Request, Response, NextFunction } from 'express';
import uuid from 'uuid/v1';
import fs from 'fs';
import { Entity } from '../models';

class InMemoryRepository {
    data: Entity[];
    idToEntity: any;
    constructor(dataFilePath: string){
        this.data = [];
        this.idToEntity = {};
        this.init(dataFilePath);
    }
    
    public get = () => {
        return [ ...this.data ];
    }
    
    public getById = (id: string) => {
        return { ...this.idToEntity[id] };
    }
    
    public add = (entity: Entity) => {
        entity.id = uuid();
        
        this.data.push(entity);
    
        this.idToEntity[entity.id] = entity;
    
        return { ...entity };
    }
    
    public update = (entity: Entity) => {
        const index = this.findEntityIndex(entity.id);
    
        if(index < 0){
            return;
        }
    
        this.data[index] = entity;
    }
    
    public remove = (id: string) => {
        const index = this.findEntityIndex(id);
    
        this.data.splice(index, 1);
    
        this.idToEntity[id] = undefined;
    }

    public findEntityIndex = (id: string) => {
        return this.data.findIndex(e => e.id === id);
    }

    public isExists = (id: string) => {
        return this.idToEntity[id] ? true : false;
    }

    private init = (dataFilePath: string) => {
        fs.readFile(dataFilePath, 'utf8', (err, rawData) => {
            if (err) throw err;
            const parsedData: Entity[] = JSON.parse(rawData);
            this.data = parsedData;
            
            parsedData.forEach(e => {
                this.idToEntity[e.id] = e;
            });
        });
    }
}

export {
    InMemoryRepository
};