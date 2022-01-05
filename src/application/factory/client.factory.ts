import { Injectable } from '@nestjs/common';
import Client from 'src/domain/client';
import ClientCommand from '../command/client.command';

@Injectable()
export default class ClientFactory {
  public createClient(clientCommand: ClientCommand): Client {
    return new Client(
      '',
      clientCommand.companyName,
      clientCommand.internalId,
      clientCommand.taxId,
      clientCommand.typeCurrency,
      clientCommand.montlyFee
    );
  }
}
