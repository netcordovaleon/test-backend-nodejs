import Client from "src/domain/client";
import { Optional } from "typescript-optional";
import { ClientEntity } from "../adapters/entity/client.entity";

export default class ClientMapper {
    public static toDomain(clientEntity: ClientEntity): Optional<Client> {
      if (!clientEntity) {
        return Optional.empty<Client>();
      }
      const client = new Client(
        clientEntity.id,
        clientEntity.companyName,
        clientEntity.internalId,
        clientEntity.taxId,
        clientEntity.typeCurrency,
        clientEntity.montlyFee
      );
  
      return Optional.of(client);
    }
  
    public static toDomains(productsEntity: ClientEntity[]): Client[] {
      const clients = new Array<Client>();
      productsEntity.forEach(clientEntity => {
        const client = this.toDomain(clientEntity);
        clients.push(client.get());
      });
      return clients;
    }
  }
  