import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto.js";
import { Category } from "./entities/category.entity.js";
export declare class CategoriesService {
    private readonly repo;
    constructor(repo: Repository<Category>);
    create(dto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
}
