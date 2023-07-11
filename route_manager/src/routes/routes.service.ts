import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';

@Injectable()
export class RoutesService {
  constructor(
    private createRoute: CreateRouteUseCase,
    private listAllRoutes: ListAllRoutesUseCase,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    return this.createRoute.execute(createRouteDto);
  }

  findAll() {
    return this.listAllRoutes.execute();
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
