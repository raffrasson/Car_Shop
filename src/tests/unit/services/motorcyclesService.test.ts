import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import MotorcycleModel from '../../../models/MotorcycleModel';
import MotorcycleService from '../../../services/MotorcyclesService';
import { motorcycleMock, motorcycleMockWithId } from '../mocks/motorcyclesMock';

describe('Motorcycle Service', () => {
	const motorcycleModel = new MotorcycleModel();
	const motorcycleService = new MotorcycleService(motorcycleModel);

	before(() => {
		sinon.stub(motorcycleModel, 'create').resolves(motorcycleMock);
		sinon.stub(motorcycleModel, 'readOne')
      // na chamada de index 0 `MotorcycleModel.readOne` vai responder um fakecar
			.onCall(0).resolves(motorcycleMock) 
      // já na próxima chamada ele vai mudar seu retorno, isso pode ser feito várias vezes
			.onCall(1).resolves(null); 
	})
	after(() => {
		sinon.restore()
	})
	describe('Create car', () => {
		// it('Success', async () => {
		// 	const carCreated = await motorcycleService.create(motorcycleMockWithId._id as any);

		// 	expect(carCreated).to.be.deep.equal(motorcycleMockWithId);
		// });

		it('Failure', async () => {
			try {
				// o "as any"(casting) abaixo pois o create não aceita um parâmetro inválido
				await motorcycleService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('ReadOne car', () => {
		// it('Success', async () => {
		// 	const carCreated = await motorcycleService.readOne(motorcycleMockWithId._id);

		// 	expect(carCreated).to.be.deep.equal(motorcycleMockWithId);
		// });

		it('Failure', async () => {
			try {
        // a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
				await motorcycleService.readOne(motorcycleMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
			}
		});
	});
});