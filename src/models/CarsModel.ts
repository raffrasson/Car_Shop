import { Schema, model as createModel } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carSchema = new Schema<ICar>(
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
    doorsQty: {
      type: Number,
      required: true,
    },
    seatsQty: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }, // fonte: https://stackoverflow.com/questions/12495891/what-is-the-v-field-in-mongoose
);

class CarsModel extends MongoModel<ICar> {
  constructor(model = createModel('Cars', carSchema)) {
    super(model);
  }
}

export default CarsModel;