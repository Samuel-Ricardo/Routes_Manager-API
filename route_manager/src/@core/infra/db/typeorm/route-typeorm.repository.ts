import { Repository } from 'typeorm';
import { RouteRepositoryInterface } from 'src/@core/domain/route.repository';
import { Route } from 'src/@core/domain/route.entity';

export class RouteTypeormRepository implements RouteRepositoryInterface {
  constructor(private repository: Repository<Route>) {}

  async insert(route: Route): Promise<void> {
    this.repository.insert(route);
  }

  async findAll(): Promise<Route[]> {
    return this.repository.find();
  }
}
