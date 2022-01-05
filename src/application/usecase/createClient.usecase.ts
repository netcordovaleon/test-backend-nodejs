import { Injectable, Inject, Logger } from '@nestjs/common';
import { Optional } from 'typescript-optional';
import Client from 'src/domain/client';
import ClientCommand from '../command/client.command';
import ClientFactory from '../factory/client.factory';
import { ClientRepository } from 'src/domain/ports/client.repository';

@Injectable()
export default class CreateClientUseCase {
  constructor(
    @Inject('ClientRepository') private clientRepository: ClientRepository,
    private clientFactory: ClientFactory,
  ) {}

  public handler(clientCommand: ClientCommand): Promise<Optional<Client>> {
    const client = this.clientFactory.createClient(clientCommand);
    return this.clientRepository.createClient(client);
  }
}
