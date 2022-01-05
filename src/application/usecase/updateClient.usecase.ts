import { Injectable, Inject, Logger } from '@nestjs/common';
import { Optional } from 'typescript-optional';
import Client from 'src/domain/client';
import ClientCommand from '../command/client.command';
import ClientFactory from '../factory/client.factory';
import { ClientRepository } from 'src/domain/ports/client.repository';

@Injectable()
export default class PartialUpdateClientUseCase {
  constructor(
    @Inject('ClientRepository') private clientRepository: ClientRepository,
    private clientFactory: ClientFactory,
  ) {}

  public handler(clientId: string, clientCommand: ClientCommand): Promise<Optional<Client>> {
    const client = this.clientFactory.createClient(clientCommand);
    return this.clientRepository.partialUpdateClient(clientId, client);
  }
}