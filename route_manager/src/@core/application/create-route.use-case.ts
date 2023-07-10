/* eslint-disable prettier/prettier  */

import { CreateRouteInput, CreateRouteOutput } from '@types';
import { RouteRepositoryInterface } from '../domain/route.repository';
import { Route } from '../domain/route.entity';

export class CreateRouteUseCase {
  constructor(private readonly repository: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = Route.create(input);
    await this.repository.insert(route);
    return route.toJSON();
  }
}
