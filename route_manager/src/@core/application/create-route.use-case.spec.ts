import { RouteRepositoryInterface } from '../domain/route.repository';
import { RouteInMemoryRepository } from '../infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from './create-route.use-case';

describe(' [USE CASE] | Create: Route (test))', () => {
  it('Should Create a new Route', async () => {
    const repository: RouteRepositoryInterface = new RouteInMemoryRepository();
    const createRoute = new CreateRouteUseCase(repository);

    const output = await createRoute.execute({
      title: 'my title',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
    });

    expect(repository.findAll()).resolves.toHaveLength(1);
    expect(output).toStrictEqual({
      id: (await repository.findAll())[0].id,
      title: 'my title',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: [],
    });
  });
});
