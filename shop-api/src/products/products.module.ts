import { Module } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { ProductsController } from './products.controller.js';
import { Category } from '../categories/entities/category.entity.js';
import { Product } from './entities/product.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from '../orders/orders.module.js';
import { ClientsModule } from '../clients/clients.module.js';
import { CategoriesModule } from '../categories/categories.module.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Category]),
  ],
 controllers: [ProductsController],
  providers: [ProductsService],
}) export class ProductsModule {}
