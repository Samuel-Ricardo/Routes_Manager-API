import { LatLng } from './LatLng';

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  poinst?: LatLng[];
};
