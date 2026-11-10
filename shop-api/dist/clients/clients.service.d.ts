import { Repository } from "typeorm";
import { CreateClientDto } from "./dto/create-client.dto.js";
import { Client } from "./entities/client.entity.js";
export declare class ClientsService {
    private readonly repo;
    constructor(repo: Repository<Client>);
    create(dto: CreateClientDto): Promise<Client>;
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<Client>;
}
