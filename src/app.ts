import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errors';
import CarsController from './controllers/carsController';
import CarsModel from './models/CarsModel';
import CarsService from './services/CarsService';

const app = express();

const repository = new CarsModel();
const carsService = new CarsService(repository);
const carsController = new CarsController(carsService);

app.use(express.json());
app.use('/cars', (req, res) => carsController.create(req, res));
app.use(errorHandler);

export default app;
