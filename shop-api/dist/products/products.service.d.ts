import { Repository } from "typeorm";
import { Category } from "../categories/entities/category.entity.js";
import { CreateProductDto } from "./dto/create-product.dto.js";
import { Product } from "./entities/product.entity.js";
export declare class ProductsService {
    private readonly products;
    private readonly cats;
    constructor(products: Repository<Product>, cats: Repository<Category>);
    create(dto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
}
