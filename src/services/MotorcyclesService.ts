import IService from '../interfaces/IService';
import { IMotorcycle, motorcycleSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class MotorcyclesService implements IService<IMotorcycle> {
  private _motorcycle:IModel<IMotorcycle>;

  constructor(model:IModel<IMotorcycle>) {
    this._motorcycle = model;
  }

  public async create(obj:IMotorcycle): Promise<IMotorcycle> {
    const parsed = motorcycleSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._motorcycle.create(obj);
  }

  public async readOne(_id:string): Promise<IMotorcycle> {
    const motorcycle = await this._motorcycle.readOne(_id);
    if (!motorcycle) throw new Error(ErrorTypes.ObjectNotFound);

    return motorcycle;
  }  
  
  public async read(): Promise<IMotorcycle[]> {
    const motorcycles = await this._motorcycle.read();
    if (!motorcycles) throw new Error(ErrorTypes.ObjectNotFound);
    return motorcycles;
  }
  public async update(string: string, obj: object): Promise<IMotorcycle> {
    const parsed = motorcycleSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }

    const motorcycleToUpdate = await this._motorcycle.readOne(string);
    console.log(motorcycleToUpdate);
    if (!motorcycleToUpdate) throw new Error(ErrorTypes.ObjectNotFound);

    const updatedMotorcycle = this._motorcycle.update(string, obj);

    return updatedMotorcycle;
  }
  
  public async delete(string: string) {
    const motorcycleToDelete = await this._motorcycle.readOne(string);

    if (!motorcycleToDelete) throw new Error(ErrorTypes.ObjectNotFound);

    const deletedMotorcycle = await this._motorcycle.delete(string);
    
    return deletedMotorcycle;
  }
}

export default MotorcyclesService;