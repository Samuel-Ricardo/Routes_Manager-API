/* eslint-disable prettier/prettier  */

import { RouteProps } from '@types/RouteProps';

describe('Route Tests', () => {
  test('Constructor', () => {
    const props: RouteProps = {
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
  });
});
