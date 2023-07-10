/* eslint-disable prettier/prettier */

import { RouteInMemoryRepository } from './route-in-memory.repository';
import { RouteProps } from '@types';
import { Route } from '../../../domain/route.entity';

describe('[REPOSITORY] | In Memory (Route)', () => {
  it('Should insert a new route', async () => {
    const repository = new RouteInMemoryRepository();

    const props: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const route = Route.create(props);

    await repository.insert(route);

    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
