import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ApplicationModule from '../application/application.module';
import ClientSchema from './adapters/schema/client.schema';
import InvoiceSchema from './adapters/schema/invoice.schema';
import { ConfigModule } from './config.module';
import { ConfigService } from './config.service';
import ClientController from './controllers/client.controller';
import InvoiceController from './controllers/invoice.controller';

const db_uri = 'MONGO_SERVER_URL';
const db_port = 'MONGO_SERVER_PORT';
const db_name = 'MONGO_SERVER_DBNAME';

@Module({})
export default class InfrastructureModule {
  static foorRoot(setting: any): DynamicModule {
    return {
      module: InfrastructureModule,
      imports: [
        ApplicationModule,
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => ({
            uri: `mongodb+srv://m001-student:UePaKOdkkRCiZafH@cordovacluster.fwjkv.mongodb.net/test?retryWrites=true&w=majority`,
          }),
          inject: [ConfigService],
        }),
        MongooseModule.forFeature([
            { name: 'Client', schema: ClientSchema },
            { name: 'Invoice', schema: InvoiceSchema }

        ]),
      ],
      controllers: [ClientController, InvoiceController],
    };
  }
}
