import uuid from 'uuid/v1';
import fs from 'fs';
import { Entity, Repository } from '../models';

class InMemoryRepository<T extends Entity> implements Repository<T> {
    private data: T[];
    private idToEntity: any;

    constructor(dataFilePath: string) {
        this.data = [];
        this.idToEntity = {};
        this.init(dataFilePath);
    }

    public get = async () => {
        return [ ...this.data ];
    }

    public getById = async (id: string) => {
        return { ...this.idToEntity[id] };
    }

    public add = async (entity: T) => {
        entity.id = uuid();

        this.data.push(entity);

        this.idToEntity[entity.id] = entity;

        return { ...entity };
    }

    public update = async (entity: T) => {
        const index = await this.findEntityIndex(entity.id);

        if (index < 0) {
            return;
        }

        this.data[index] = entity;
    }

    public remove = async (id: string) => {
        const index = await this.findEntityIndex(id);

        this.data.splice(index, 1);

        this.idToEntity[id] = undefined;
    }

    public findEntityIndex = async (id: string) => {
        return this.data.findIndex(e => e.id === id);
    }

    public isExists = async (id: string) => {
        return this.idToEntity[id] ? true : false;
    }

    public getFiltered = async (filter: (value: T) => boolean) => {
        return this.data.filter(filter);
    }

    private init = (dataFilePath: string) => {
        fs.readFile(dataFilePath, 'utf8', (err, rawData) => {
            if (err) throw err;
            const parsedData: T[] = JSON.parse(rawData);
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
