import { DataSource } from 'typeorm';
import { RouteSchema } from './route.schema';
import { Route } from '../../../domain/route.entity';
import { RouteTypeormRepository } from './route-typeorm.repository';
import { RouteProps } from '@types';

describe('[REPOSITORY] | TypeORM (Route)', () => {
  it('Should insert a new route', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [RouteSchema],
    });

    await dataSource.initialize();

    const ormRepository = dataSource.getRepository(Route);
    const repository = new RouteTypeormRepository(ormRepository);

    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const route = Route.create(routeProps);
    await repository.insert(route);

    console.log(await repository.findAll());

    const routeFound = await repository.findAll();
    expect(routeFound[0].toJSON()).toStrictEqual(route.toJSON());
  });
});
