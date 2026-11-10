import { Client } from '../../clients/entities/client.entity.js';
import { OrderItem } from './order-item.entity.js';
import type { Relation } from 'typeorm';
export declare class CustomerOrder {
    id: number;
    status: string;
    total: string;
    createdAt: Date;
    client: Relation<Client>;
    clientId: number;
    items: Relation<OrderItem[]>;
}
