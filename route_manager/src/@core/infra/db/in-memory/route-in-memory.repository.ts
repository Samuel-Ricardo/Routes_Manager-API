import { Route } from 'src/@core/domain/route.entity';
import { RouteRepositoryInterface } from 'src/@core/domain/route.repository';

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  items: Route[] = [];

  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.items;
  }
}
