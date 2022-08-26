import IService from '../interfaces/IService';
import { ICar, carSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarsService implements IService<ICar> {
  private _car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(obj);
  }

  public async readOne(_id:string):Promise<ICar> {
    const frame = await this._car.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }  
  
  public async read(): Promise<ICar[]> {
    const cars = this._car.read();
    return cars;
  }
  public async update(string: string, obj: object): Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }

    return this._car.update(string, parsed);
  }
  public async delete(string: string) {
    return this._car.delete(string);
  }
}

export default CarsService;