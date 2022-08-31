import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import CarsController from '../../../controllers/carsController';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import { carMock, carMockWithId, carsArrayMock } from '../mocks/carsMock';

describe('Car Controller', () => {
	const carModel = new CarsModel();
	const carService = new CarsService(carModel);
  const carController = new CarsController(carService);
  // fazemos o cast de um objeto para um `Request` pois nosso controller só vai aceitar um objeto do tipo `Request` como primeiro parâmetro
  const req = {} as Request; 
  // o mesmo acontece com o segundo parâmetro
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'readOne').resolves(carMock);
    sinon.stub(carService, 'read').resolves(carsArrayMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Car', () => {
    it('Success', async () => {
      req.body = carMock;
      await carController.create(req, res);
      // o cast de `res.status` é feito pois `res` foi criado como do tipo `Resquest` 
      // e agora, que queremos validar com o que foi chamado, precisar ser tratado como um `sinon.SinonStub`
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('ReadOne Car', () => {
    it('Success', async () => {
      // como fizemos o dublê da service o valor do `req.params.id` não vai chegar na model
      // logo ele só precisa ser um string e existir
      req.params = { id: carMockWithId._id };
      await carController.getOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('ReadAll Cars', () => {
    it('Success', async () => {
      // como fizemos o dublê da service o valor do `req.params.id` não vai chegar na model
      // logo ele só precisa ser um string e existir
      await carController.getAll(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });
});