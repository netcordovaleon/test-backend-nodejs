import { Module, DynamicModule } from '@nestjs/common';
import ApplicationModule from './application/application.module';
import DomainModule from './domain/domain.module';
import InfrastructureModule from './infraestructure/infraestructure.module';

@Module({})
export default class AppModule {
  static foorRoot(setting: any): DynamicModule {
    return {
      module: AppModule,
      imports: [
        DomainModule,
        ApplicationModule,
        InfrastructureModule.foorRoot(setting),
      ],
    };
  }
}

