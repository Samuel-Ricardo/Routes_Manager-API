import { LatLng } from './LatLng';

export type ListRoutesOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  paths?: LatLng[];
}[];
