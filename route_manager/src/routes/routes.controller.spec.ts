import { Test, TestingModule } from '@nestjs/testing';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';
import { RouteRepositoryInterface } from '../@core/domain/route.repository';
import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { RouteInMemoryRepository } from '../@core/infra/db/in-memory/route-in-memory.repository';

describe('RoutesController', () => {
  let controller: RoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutesController],
      providers: [
        RoutesService,
        {
          provide: RouteInMemoryRepository,
          useClass: RouteInMemoryRepository,
        },
        {
          provide: CreateRouteUseCase,
          useFactory: (repository: RouteRepositoryInterface) =>
            new CreateRouteUseCase(repository),
          inject: [RouteInMemoryRepository],
        },
        {
          provide: ListAllRoutesUseCase,
          useFactory: (repository: RouteRepositoryInterface) =>
            new ListAllRoutesUseCase(repository),
          inject: [RouteInMemoryRepository],
        },
      ],
    }).compile();

    controller = module.get<RoutesController>(RoutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
