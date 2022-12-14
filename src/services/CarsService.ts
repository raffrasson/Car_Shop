import IService from '../interfaces/IService';
import { ICar, carSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarsService implements IService<ICar> {
  private _car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar): Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(obj);
  }

  public async readOne(_id:string): Promise<ICar> {
    const car = await this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.ObjectNotFound);

    return car;
  }  
  
  public async read(): Promise<ICar[]> {
    const cars = await this._car.read();
    if (!cars) throw new Error(ErrorTypes.ObjectNotFound);
    return cars;
  }
  public async update(string: string, obj: object): Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }

    const carToUpdate = await this._car.readOne(string);

    if (!carToUpdate) throw new Error(ErrorTypes.ObjectNotFound);

    const updatedCar = this._car.update(string, obj);

    return updatedCar;
  }
  public async delete(string: string) {
    const carToDelete = await this._car.readOne(string);

    if (!carToDelete) throw new Error(ErrorTypes.ObjectNotFound);

    const deletedCar = await this._car.delete(string);
    
    return deletedCar;
  }
}

export default CarsService;