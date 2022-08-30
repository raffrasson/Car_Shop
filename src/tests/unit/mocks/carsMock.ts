import { ICar } from "../../../interfaces/ICar";

const carMock:ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2,
};

const carMockWithId = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2,
  _id: "630d5b55ef135d91c6440009",
};

const carsArrayMock:ICar[] = [
  {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}, 
{
  model: 'Uno da Firma',
  year: 1969,
  color: 'blue',
  buyValue: 3900,
  seatsQty: 4,
  doorsQty: 2
}];

const updatedCarMock:ICar = {
  model: 'Novo Uno',
  year: 2019,
  color: 'red',
  buyValue: 10000,
  seatsQty: 4,
  doorsQty: 4
};
updatedCarMock

export { carMock, carMockWithId, updatedCarMock, carsArrayMock };