import { Schema, model as createModel } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const carSchema = new Schema<IMotorcycle>({
  category: {
    type: String,
    required: true,
  },
  engineCapacity: {
    type: Number,
    required: true,
  },
});

class MotorcyclesModel extends MongoModel<IMotorcycle> {
  constructor(model = createModel('Motorcycles', carSchema)) {
    super(model);
  }
}

export default MotorcyclesModel;