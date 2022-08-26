import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarsController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request & { body: ICar }, 
    res: Response<ICar>,
  ) {
    const {
      status, model, year, color, buyValue, doorsQty, seatsQty, 
    } = req.body;
    const car = { status, model, year, color, buyValue, doorsQty, seatsQty };
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  public async getAll(
    req: Request,
    res: Response<ICar[]>,
  ) {
    const result = await this._service.read();
    console.log(result);
    return res.status(200).json(result);
  }
}