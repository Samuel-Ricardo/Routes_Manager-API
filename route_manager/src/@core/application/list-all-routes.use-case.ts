/* eslint-disable prettier/prettier  */

import { ListRoutesOutput } from '@types';
import { RouteRepositoryInterface } from '../domain/route.repository';

export class ListAllRoutesUseCase {
  constructor(private readonly repository: RouteRepositoryInterface) {}

  async execute(): Promise<ListRoutesOutput> {
    const routes = await this.repository.findAll();
    return routes.map((route) => route.toJSON());
  }
}
