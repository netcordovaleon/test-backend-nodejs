import {
    Controller,
    Get,
    Post,
    Res,
    HttpStatus,
    Body,
  } from '@nestjs/common';
import ClientCommand from 'src/application/command/client.command';
import CreateClientUseCase from 'src/application/usecase/createClient.usecase';

@Controller('client/')
export default class ClientController {

    constructor(
        private readonly createClientUseCase: CreateClientUseCase
    ) {}

    @Post()
    public async createClient(
      @Res() request,
      @Body() product: ClientCommand,
    ): Promise<any> {
      const clientCreated = await this.createClientUseCase.handler(product);
      return request.status(HttpStatus.CREATED).json(clientCreated);
    }
}