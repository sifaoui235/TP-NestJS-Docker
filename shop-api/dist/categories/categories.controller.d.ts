import { CategoriesService } from './categories.service.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(dto: CreateCategoryDto): Promise<import("./entities/category.entity.js").Category>;
    findAll(): Promise<import("./entities/category.entity.js").Category[]>;
    findOne(id: number): Promise<import("./entities/category.entity.js").Category>;
}
