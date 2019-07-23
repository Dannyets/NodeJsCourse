import { Entity } from './entity';

export interface Product extends Entity {
    categoryId: string,
    name: string,
    itemsInStock: number
};