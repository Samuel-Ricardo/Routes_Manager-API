import { Test, TestingModule } from '@nestjs/testing';
import { RoutesService } from './routes.service';
import { RouteInMemoryRepository } from '../@core/infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { RouteRepositoryInterface } from '../@core/domain/route.repository';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';

describe('RoutesService', () => {
  let service: RoutesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<RoutesService>(RoutesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
