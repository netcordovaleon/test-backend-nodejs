import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import DomainModule from "src/domain/domain.module";
import ClientRepositoryMongo from "src/infraestructure/adapters/client.repository";
import InvoiceRepositoryMongo from "src/infraestructure/adapters/invoice.repository";
import ClientSchema from "src/infraestructure/adapters/schema/client.schema";
import InvoiceSchema from "src/infraestructure/adapters/schema/invoice.schema";
import ClientFactory from "./factory/client.factory";
import InvoiceFactory from "./factory/invoice.factory";
import CreateClientUseCase from "./usecase/createClient.usecase";
import CreateInvoiceUseCase from "./usecase/createInvoice.usecase";
import GetInvoiceUseCase from "./usecase/getInvoice.usecase";

@Module({
    imports: [
      DomainModule,
      MongooseModule.forFeature([
        {
          name: 'Client',
          schema: ClientSchema,
        },
        {
          name: 'Invoice',
          schema: InvoiceSchema,
        }
      ]),
    ],
    providers: [
      ClientFactory,
      InvoiceFactory,
      CreateClientUseCase,
      GetInvoiceUseCase,
      CreateInvoiceUseCase,
      {
        provide: 'ClientRepository',
        useClass: ClientRepositoryMongo,
      },
      {
        provide: 'InvoiceRepository',
        useClass: InvoiceRepositoryMongo,
      }
    ],
    exports: [
      ClientFactory,
      InvoiceFactory,
      CreateClientUseCase,
      GetInvoiceUseCase,
      CreateInvoiceUseCase
    ],
  })
  export default class ApplicationModule {}
  