import {
    Controller,
    Get,
    Post,
    Res,
    HttpStatus,
    Body,
    Put,
  } from '@nestjs/common';
import ClientCommand from 'src/application/command/client.command';
import CreateClientUseCase from 'src/application/usecase/createClient.usecase';
import PartialUpdateClientUseCase from 'src/application/usecase/updateClient.usecase';

@Controller('client/')
export default class ClientController {

    constructor(
        private readonly createClientUseCase: CreateClientUseCase,
        private readonly updateParticlClientUseCase: PartialUpdateClientUseCase
    ) {}

    @Post()
    public async createClient(
      @Res() request,
      @Body() client: ClientCommand,
    ): Promise<any> {
      const clientCreated = await this.createClientUseCase.handler(client);
      return request.status(HttpStatus.CREATED).json(clientCreated);
    }

    @Put()
    public async updateClient(
      @Res() request,
      @Body() client: ClientCommand,
    ): Promise<any> {
      const { id } = request.req.query;
      const clientCreated = await this.updateParticlClientUseCase.handler(id, client);
      return request.status(HttpStatus.OK).json(clientCreated);
    }
}