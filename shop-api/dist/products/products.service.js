var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "../categories/entities/category.entity.js";
import { Product } from "./entities/product.entity.js";
let ProductsService = class ProductsService {
    products;
    cats;
    constructor(products, cats) {
        this.products = products;
        this.cats = cats;
    }
    async create(dto) {
        const category = await this.cats.findOneBy({ id: dto.categoryId });
        if (!category)
            throw new NotFoundException('Categorie introuvable');
        return this.products.save(this.products.create({
            name: dto.name, price: dto.price.toFixed(2),
            stock: dto.stock, category,
        }));
    }
    findAll() { return this.products.find({ relations: { category: true } }); }
    async findOne(id) {
        const product = await this.products.findOne({ where: { id },
            relations: { category: true } });
        if (!product)
            throw new NotFoundException('Produit introuvable');
        return product;
    }
};
ProductsService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Product)),
    __param(1, InjectRepository(Category)),
    __metadata("design:paramtypes", [Repository,
        Repository])
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map