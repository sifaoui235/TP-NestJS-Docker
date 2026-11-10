import { DataSource } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto.js';
import { CustomerOrder } from './entities/order.entity.js';
export declare class OrdersService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    create(dto: CreateOrderDto): Promise<CustomerOrder>;
    findAll(): Promise<CustomerOrder[]>;
}
