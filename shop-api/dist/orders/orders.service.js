var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Client } from '../clients/entities/client.entity.js';
import { Product } from '../products/entities/product.entity.js';
import { CustomerOrder } from './entities/order.entity.js';
import { OrderItem } from './entities/order-item.entity.js';
let OrdersService = class OrdersService {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async create(dto) {
        return this.dataSource.transaction(async (manager) => {
            const client = await manager.findOneBy(Client, { id: dto.clientId });
            if (!client)
                throw new NotFoundException('Client introuvable');
            const ids = dto.items.map((i) => i.productId);
            if (new Set(ids).size !== ids.length)
                throw new BadRequestException('Produit duplique dans la commande');
            const byId = new Map(dto.items.map(i => [i.productId, i]));
            const snapshots = new Map();
            for (const id of [...ids].sort((a, b) => a - b)) {
                const input = byId.get(id);
                const product = await manager.findOneBy(Product, { id });
                if (!product)
                    throw new NotFoundException(`Produit ${id} introuvable`);
                const update = await manager.createQueryBuilder()
                    .update(Product)
                    .set({ stock: () => `stock - ${input.quantity}` })
                    .where('id = :id AND stock >= :qty', { id, qty: input.quantity })
                    .execute();
                if (update.affected !== 1)
                    throw new BadRequestException(`Stock insuffisant: ${id}`);
                snapshots.set(id, product);
            }
            const cents = dto.items.reduce((sum, line) => {
                const p = snapshots.get(line.productId);
                return sum + Math.round(Number(p.price) * 100) * line.quantity;
            }, 0);
            const order = await manager.save(CustomerOrder, manager.create(CustomerOrder, { clientId: client.id,
                total: (cents / 100).toFixed(2), status: 'CREATED' }));
            for (const line of dto.items) {
                const product = snapshots.get(line.productId);
                await manager.save(OrderItem, manager.create(OrderItem, {
                    orderId: order.id, productId: product.id,
                    quantity: line.quantity, unitPrice: product.price,
                }));
            }
            return manager.findOneOrFail(CustomerOrder, {
                where: { id: order.id },
                relations: { client: true, items: { product: true } },
            });
        });
    }
    findAll() {
        return this.dataSource.getRepository(CustomerOrder).find({
            relations: { client: true, items: { product: true } },
        });
    }
};
OrdersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [DataSource])
], OrdersService);
export { OrdersService };
//# sourceMappingURL=orders.service.js.map