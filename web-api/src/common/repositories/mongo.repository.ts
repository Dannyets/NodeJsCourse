import uuid from 'uuid/v1';
import { MongoEntity, Repository } from '../models';
import mongodb, { Collection, ObjectID } from 'mongodb';

export class MongoRepository<T extends MongoEntity> implements Repository<T> {
    private collection: Collection<T> | undefined;

    constructor(name: string, connectionString: string) {
        this.init(name, connectionString);
    }

    public getAll = async () => {
        return await this.collection!.find({}).toArray();
    }

    public getById = async (id: string) => {
        const objectId = new ObjectID(id);

        return await this.collection!.findOne({ _id: objectId });
    }

    public add = async (entity: T) => {
        const id = uuid();

        entity.id = id;

        const objectId = new ObjectID(id);

        entity._id = objectId;

        this.collection!.insertOne(entity);

        return entity;
    }

    public replace = async (entity: T) => {
        const objectId = new ObjectID(entity.id);

        await this.collection!.replaceOne(
            { _id: objectId },
            entity,
            { upsert: true}, // update or insert if not exists (can be used with update methods too)
        );
    }

    public remove = async (id: string) => {
        const objectId = new ObjectID(id);

        await this.collection!.deleteOne({ _id: objectId });
    }

    public getFiltered = async (filter: (value: T) => boolean) => {

    }

    private init = async (name: string, connectionString: string) => {
        const options = { useNewUrlParser: true };

        const client = await mongodb.MongoClient.connect(connectionString, options);

        const db = client.db();

        this.collection = db.collection<T>(name);
    }
}
