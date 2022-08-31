import { Schema, model as createModel } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motorcycleSchema = new Schema<IMotorcycle>(
  {
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: false,
    },
    buyValue: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['Street', 'Custom', 'Trail'],
      required: true,
    },
    engineCapacity: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }, // fonte: https://stackoverflow.com/questions/12495891/what-is-the-v-field-in-mongoose
);

class MotorcyclesModel extends MongoModel<IMotorcycle> {
  constructor(model = createModel('Motorcycles', motorcycleSchema)) {
    super(model);
  }
}

export default MotorcyclesModel;