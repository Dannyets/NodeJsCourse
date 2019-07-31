import { Entity } from '@common/models';

export interface Product extends Entity {
    categoryId: string;
    name: string;
    itemsInStock: number;
}
