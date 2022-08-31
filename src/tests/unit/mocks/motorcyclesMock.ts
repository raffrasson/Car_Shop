import { IMotorcycle } from "../../../interfaces/IMotorcycle";

const motorcycleMock:IMotorcycle = {
  model: 'falcon da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 1000,
};

const motorcycleMockWithId = {
  model: 'falcon da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 1000,
  _id: "630d5b55ef135d91c6440009",
};

const motorcyclesArrayMock:IMotorcycle[] = [
  {
  model: 'falcon da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 1000,
}, 
{
  model: 'falcon da Firma',
  year: 1969,
  color: 'blue',
  buyValue: 3900,
  category: 'Street',
  engineCapacity: 1000,
}];

const updatedMotorcycleMock:IMotorcycle = {
  model: 'Novo falcon',
  year: 2019,
  color: 'red',
  buyValue: 10000,
  category: 'Street',
  engineCapacity: 1000,
};
updatedMotorcycleMock

export { motorcycleMock, motorcycleMockWithId, updatedMotorcycleMock, motorcyclesArrayMock };