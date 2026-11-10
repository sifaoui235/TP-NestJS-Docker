import { CustomerOrder } from '../../orders/entities/order.entity.js';
import type { Relation } from 'typeorm';
export declare class Client {
    id: number;
    fullName: string;
    email: string;
    orders: Relation<CustomerOrder[]>;
}
