import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarsController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    // Unimos o tipo do _request_ com um objeto que tem chave `body` com o valor de um ICar
    // assim conseguimos extrair as propriedades da armação para passá-las para o _service_
    req: Request & { body: ICar }, 
    // Usamos o ICar como parâmetro genérico do Request
    // para declarar que vamos responder a requisição com um objeto do tipo ICar
    res: Response<ICar>,
  ) {
    const { status, model, year,
      color,
      buyValue,
      doorsQty,
      seatsQty } = req.body;
    const car = { status,
      model,
      year,
      color,
      buyValue,
      doorsQty,
      seatsQty };
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  // public async readOne(
  //   req: Request,
  //   res: Response<ICar>,
  // ) {
  //   const result = await this._service.readOne(req.params.id);
  //   return res.status(2001).json(result);
  // }
}