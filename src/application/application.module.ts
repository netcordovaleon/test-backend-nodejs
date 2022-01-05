import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import DomainModule from "src/domain/domain.module";
import ClientRepositoryMongo from "src/infraestructure/adapters/client.repository";
import ClientSchema from "src/infraestructure/adapters/schema/client.schema";
import ClientFactory from "./factory/client.factory";
import CreateClientUseCase from "./usecase/createClient.usecase";

@Module({
    imports: [
      DomainModule,
      MongooseModule.forFeature([
        {
          name: 'Client',
          schema: ClientSchema,
        },
      ]),
    ],
    providers: [
      ClientFactory,
      CreateClientUseCase,
      {
        provide: 'ClientRepository',
        useClass: ClientRepositoryMongo,
      },
    ],
    exports: [
      ClientFactory,
      CreateClientUseCase
    ],
  })
  export default class ApplicationModule {}
  