import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }
  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }
  public async read(): Promise<T[]> {
    return this._model.find();
  }
  public async readOne(string: string): Promise<T | null> {
    return this._model.findOne({ string });
  }
  public async update(string: string, object: object): Promise<T | null> {
    return this._model.findOneAndUpdate(
      { string },
      { object },
      { new: true }, // no Mongoose usa new, e não returnDocument. fonte: https://stackoverflow.com/questions/24747189/update-and-return-document-in-mongodb
    );
  }
  public async delete(string: string): Promise<T | null> {
    return this._model.findOneAndDelete({ string });
  }
}

export default MongoModel;