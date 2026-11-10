import type { Relation } from 'typeorm';
import { Category } from '../../categories/entities/category.entity.js';
import { OrderItem } from '../../orders/entities/order-item.entity.js';
export declare class Product {
    id: number;
    name: string;
    price: string;
    stock: number;
    category: Relation<Category>;
    categoryId: number;
    items: Relation<OrderItem[]>;
}
