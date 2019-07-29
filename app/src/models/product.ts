import { Entity } from '../common';

export interface Product extends Entity {
    categoryId: string;
    name: string;
    itemsInStock: number;
}
