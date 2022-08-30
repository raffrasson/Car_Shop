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

  public async getOne(
    req: Request,
    res: Response<ICar>,
  ) {
    const { id } = req.params; 

    const result = await this._service.readOne(id);
    
    return res.status(200).json(result);
  }

  public async update(
    req: Request, 
    res: Response<ICar>,
  ) {
    const { id } = req.params; 
    console.log(id);
    const result = await this._service.update(id, req.body);

    return res.status(200).json(result);
  }

  public async delete(
    req: Request, 
    res: Response<ICar>,
  ) {
    const { id } = req.params; 
    await this._service.delete(id);
    return res.status(204).end();
  }
}