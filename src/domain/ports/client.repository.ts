import { Optional } from 'typescript-optional';
import Client from '../client';

export interface ClientRepository {
  getAll(): Promise<Client[]>;

  getClient(clientId: string): Promise<Optional<Client>>;

  createClient(client: Client): Promise<Optional<Client>>;

  deleteClient(clientId: string): Promise<Optional<Client>>;

  updateClient(
    clientId: string,
    client: Client,
  ): Promise<Optional<Client>>;
}
