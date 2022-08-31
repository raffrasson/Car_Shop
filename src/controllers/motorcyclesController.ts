import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcyclesController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(
    req: Request & { body: IMotorcycle }, 
    res: Response<IMotorcycle>,
  ) {
    const {
      status, model, year, color, buyValue, category, engineCapacity, 
    } = req.body;
    const motorcycle = { 
      status, model, year, color, buyValue, category, engineCapacity,
    };
    const results = await this._service.create(motorcycle);
    return res.status(201).json(results);
  }

  public async getAll(
    req: Request,
    res: Response<IMotorcycle[]>,
  ) {
    const result = await this._service.read();
    console.log(result);
    return res.status(200).json(result);
  }

  public async getOne(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const { id } = req.params; 

    const result = await this._service.readOne(id);
    
    return res.status(200).json(result);
  }

  public async update(
    req: Request, 
    res: Response<IMotorcycle>,
  ) {
    const { id } = req.params; 

    const result = await this._service.update(id, req.body);

    return res.status(200).json(result);
  }

  public async delete(
    req: Request, 
    res: Response<IMotorcycle>,
  ) {
    const { id } = req.params; 
    await this._service.delete(id);
    return res.status(204).end();
  }
}