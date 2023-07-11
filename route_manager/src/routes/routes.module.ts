import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { RouteSchema } from '../@core/infra/db/typeorm/route.schema';
import { RouteTypeormRepository } from '../@core/infra/db/typeorm/route-typeorm.repository';
import { Route } from '../@core/domain/route.entity';
import { RouteInMemoryRepository } from 'src/@core/infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from 'src/@core/application/create-route.use-case';
import { RouteRepositoryInterface } from 'src/@core/domain/route.repository';
import { ListAllRoutesUseCase } from 'src/@core/application/list-all-routes.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    RoutesService,

    {
      provide: RouteTypeormRepository,
      useFactory: (datasource: DataSource) =>
        new RouteTypeormRepository(datasource.getRepository(Route)),
      inject: [getDataSourceToken()],
    },
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (repository: RouteRepositoryInterface) =>
        new CreateRouteUseCase(repository),
      inject: [RouteTypeormRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (repository: RouteRepositoryInterface) =>
        new ListAllRoutesUseCase(repository),
      inject: [RouteTypeormRepository],
    },
  ],
})
export class RoutesModule {}
