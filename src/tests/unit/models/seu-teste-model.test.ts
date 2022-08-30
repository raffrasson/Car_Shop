import { expect } from 'chai';
import sinon from 'sinon';
import CarsModel from '../../../models/CarsModel';
import { Model } from 'mongoose';
import { carMock, carMockWithId, updatedCarMock, carsArrayMock } from '../mocks/carsMock'

describe('Cars Model', () => {
  const carsModel = new CarsModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(carsArrayMock);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'findOneAndUpdate').resolves(updatedCarMock);
	});


	describe('creating a car', () => {
		it('successfully created', async () => {
			const newCar = await carsModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

	describe('searching a car', () => {
		it('successfully found', async () => {
			const carFound = await carsModel.readOne('630d5b55ef135d91c6440009');
			expect(carFound).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carsModel.readOne('75395734895749378590385');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});


	after(() => {
		sinon.restore();
	});

});