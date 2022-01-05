import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Optional } from 'typescript-optional';
import { ClientRepository } from 'src/domain/ports/client.repository';
import { ClientEntity } from './entity/client.entity';
import ClientMapper from '../mapper/client.mapper';
import { InjectModel } from '@nestjs/mongoose';
import Client from 'src/domain/client';

@Injectable()
export default class ClientRepositoryMongo implements ClientRepository {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<ClientEntity>,
  ) {}
    public async getAll(): Promise<Client[]> {
        const clients = await this.clientModel.find();
        return ClientMapper.toDomains(clients);
    }
    public async getClient(clientId: string): Promise<Optional<Client>> {
        const client = await this.clientModel.findById(clientId);
        return ClientMapper.toDomain(client);
    }
    public async createClient(client: Client): Promise<Optional<Client>> {
        let clientCreated = new this.clientModel(client);
        clientCreated = await clientCreated.save();
        return ClientMapper.toDomain(clientCreated);
    }
    public async deleteClient(clientId: string): Promise<Optional<Client>> {
        const clientDelete = await this.clientModel.findByIdAndDelete(clientId);
        return ClientMapper.toDomain(clientDelete);
    }
    public async updateClient(clientId: string, client: Client): Promise<Optional<Client>> {
        const clientUpdated = await this.clientModel.findByIdAndUpdate(
            clientId,
            client,
            { new: true },
          );
          return ClientMapper.toDomain(clientUpdated);
    }

    public async partialUpdateClient(clientId: string, client: Client): Promise<Optional<Client>> {
        const currentClient = await this.clientModel.findById(clientId);
        currentClient.taxId = client.taxId;
        currentClient.typeCurrency = client.typeCurrency;
        const clientUpdated = await this.clientModel.findByIdAndUpdate(
            clientId,
            currentClient,
            { new: true },
          );
          return ClientMapper.toDomain(clientUpdated);
    }
}
