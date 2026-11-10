import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(CreateProductDto: CreateProductDto): Promise<import("./entities/product.entity.js").Product>;
    findAll(): Promise<import("./entities/product.entity.js").Product[]>;
    findOne(id: string): Promise<import("./entities/product.entity.js").Product>;
}
