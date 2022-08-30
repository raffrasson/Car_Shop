import { z } from 'zod';
import { vehicleSchema } from './IVehicle';

const motorcycleSchema = vehicleSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().gt(0).lte(2500),
});

type IMotorcycle = z.infer<typeof motorcycleSchema>;

export { motorcycleSchema, IMotorcycle };