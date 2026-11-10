import { Product } from '../../products/entities/product.entity.js';
import type { Relation } from 'typeorm';
export declare class Category {
    id: number;
    name: string;
    products: Relation<Product[]>;
}
