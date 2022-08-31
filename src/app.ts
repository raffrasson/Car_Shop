import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errors';
import CarsController from './controllers/carsController';
import CarsModel from './models/CarsModel';
import CarsService from './services/CarsService';
import MotorcyclesController from './controllers/motorcyclesController';
import MotorcyclesModel from './models/MotorcycleModel';
import MotorcyclesService from './services/MotorcyclesService';
import carErrors from './middlewares/carErrors';

const app = express();

const repository = new CarsModel();
const carsService = new CarsService(repository);
const carsController = new CarsController(carsService);

const motorcyclesRepository = new MotorcyclesModel();
const motorcyclesService = new MotorcyclesService(motorcyclesRepository);
const motorcyclesController = new MotorcyclesController(motorcyclesService);

app.use(express.json());

app.post('/cars', (req, res) => carsController.create(req, res));
app.get('/cars', (req, res) => carsController.getAll(req, res));
app.get('/cars/:id', carErrors, (req, res) => carsController.getOne(req, res));
app.put('/cars/:id', carErrors, (req, res) => carsController.update(req, res));
app.delete(
  '/cars/:id', 
  carErrors,
  (req, res) => carsController.delete(req, res),
);

const motoId = '/motorcycles/:id';

app.post('/motorcycles', (req, res) => motorcyclesController.create(req, res));
app.get('/motorcycles', (req, res) => motorcyclesController.getAll(req, res));
app.get(motoId, carErrors, (req, res) => 
  motorcyclesController.getOne(req, res));
app.put(motoId, carErrors, (req, res) => 
  motorcyclesController.update(req, res));
app.delete(
  motoId, 
  carErrors,
  (req, res) => motorcyclesController.delete(req, res),
);

app.use(errorHandler);

export default app;
