var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn } from 'typeorm';
import { Client } from '../../clients/entities/client.entity.js';
import { OrderItem } from './order-item.entity.js';
let CustomerOrder = class CustomerOrder {
    id;
    status;
    total;
    createdAt;
    client;
    clientId;
    items;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CustomerOrder.prototype, "id", void 0);
__decorate([
    Column({ default: 'CREATED' }),
    __metadata("design:type", String)
], CustomerOrder.prototype, "status", void 0);
__decorate([
    Column('decimal', { precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", String)
], CustomerOrder.prototype, "total", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], CustomerOrder.prototype, "createdAt", void 0);
__decorate([
    ManyToOne(() => Client, (c) => c.orders, { onDelete: 'RESTRICT' }),
    JoinColumn({ name: 'clientId' }),
    __metadata("design:type", Object)
], CustomerOrder.prototype, "client", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], CustomerOrder.prototype, "clientId", void 0);
__decorate([
    OneToMany(() => OrderItem, (i) => i.order),
    __metadata("design:type", Object)
], CustomerOrder.prototype, "items", void 0);
CustomerOrder = __decorate([
    Entity('customer_orders')
], CustomerOrder);
export { CustomerOrder };
//# sourceMappingURL=order.entity.js.map