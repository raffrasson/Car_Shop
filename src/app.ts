import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errors';
import CarsController from './controllers/carsController';
import CarsModel from './models/CarsModel';
import CarsService from './services/CarsService';
import carErrors from './middlewares/carErrors';

const app = express();

const repository = new CarsModel();
const carsService = new CarsService(repository);
const carsController = new CarsController(carsService);

app.use(express.json());
app.post('/cars', (req, res) => carsController.create(req, res));
app.get('/cars', (req, res) => carsController.getAll(req, res));
app.get('/cars/:id', carErrors, (req, res) => carsController.getOne(req, res));
// app.put('/cars/:id', carErrors, (req, res) => carsController.update(req, res));
// app.delete(
//   '/cars/:id', 
//   (req, res) => carsController.delete(req, res),
// );
app.use(errorHandler);

export default app;
