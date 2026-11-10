import { OrdersService } from './orders.service.js';
import { CreateOrderDto } from './dto/create-order.dto.js';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(dto: CreateOrderDto): Promise<import("./entities/order.entity.js").CustomerOrder>;
    findAll(): Promise<import("./entities/order.entity.js").CustomerOrder[]>;
}
