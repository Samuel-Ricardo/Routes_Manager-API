/* eslint-disable prettier/prettier  */

import { RouteProps, LatLng } from '@types';
import { Route } from './route.entity';

describe('Route Tests', () => {
  test('Constructor', () => {
    let props: RouteProps = {
      title: 'title',
      startPosition: {
        lat: 0,
        lng: 1,
      },
      endPosition: {
        lat: 2,
        lng: 3,
      },
      points: [],
    };

    let route = Route.create(props);

    expect(route.props.title).toBe(props.title);
    expect(route.props).toStrictEqual({
      ...props,
      points: [],
    });

    props = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 10, lng: 11 }],
    };

    route = Route.create(props);
    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...props,
      points: [{ lat: 10, lng: 11 }],
    });
  });

  test('updateTitle method', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = Route.create(routeProps);
    route.updateTitle('title updated');
    expect(route.title).toBe('title updated');
  });

  test('updatePosition method', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    const route = Route.create(routeProps);
    const startPosition: LatLng = { lat: 10, lng: 20 };
    const endPosition: LatLng = { lat: 30, lng: 40 };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });
});
