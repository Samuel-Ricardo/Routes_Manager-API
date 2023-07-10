import express, { Express, Request, Response } from 'express';
import { RouteInMemoryRepository } from '../../db/in-memory/route-in-memory.repository';
import { ListAllRoutesUseCase } from 'src/@core/application/list-all-routes.use-case';
import { CreateRouteUseCase } from 'src/@core/application/create-route.use-case';

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const routeRepo = new RouteInMemoryRepository();

app.get('/routes', async (_req: Request, res: Response) => {
  const listAll = new ListAllRoutesUseCase(routeRepo);
  const output = await listAll.execute();
  res.json(output);
});

app.post('/routes', async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(routeRepo);
  const output = await createUseCase.execute(req.body);
  res.status(201).json(output);
});

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
