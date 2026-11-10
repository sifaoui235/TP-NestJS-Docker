import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(dto: CreateClientDto): Promise<import("./entities/client.entity.js").Client>;
    findAll(): Promise<import("./entities/client.entity.js").Client[]>;
    findOne(id: number): Promise<import("./entities/client.entity.js").Client>;
    update(id: number, dto: UpdateClientDto): unknown;
    remove(id: number): unknown;
}
