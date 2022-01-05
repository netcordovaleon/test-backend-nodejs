import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import DomainModule from "src/domain/domain.module";
import ClientRepositoryMongo from "src/infraestructure/adapters/client.repository";
import InvoiceRepositoryMongo from "src/infraestructure/adapters/invoice.repository";
import ClientSchema from "src/infraestructure/adapters/schema/client.schema";
import InvoiceSchema from "src/infraestructure/adapters/schema/invoice.schema";
import CsvAdapter from "src/shared/csvAdapter";
import ClientFactory from "./factory/client.factory";
import InvoiceFactory from "./factory/invoice.factory";
import BulkInvoiceUseCase from "./usecase/bulkInvoice.usecase";
import CreateClientUseCase from "./usecase/createClient.usecase";
import CreateInvoiceUseCase from "./usecase/createInvoice.usecase";
import GetInvoiceUseCase from "./usecase/getInvoice.usecase";
import GetInvoiceFilterUseCase from "./usecase/getInvoiceFilter.usecase";
import PartialUpdateClientUseCase from "./usecase/updateClient.usecase";

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
      CsvAdapter,
      BulkInvoiceUseCase,
      GetInvoiceFilterUseCase,
      PartialUpdateClientUseCase,
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
      CreateInvoiceUseCase,
      CsvAdapter,
      BulkInvoiceUseCase,
      GetInvoiceFilterUseCase,
      PartialUpdateClientUseCase
    ],
  })
  export default class ApplicationModule {}
  