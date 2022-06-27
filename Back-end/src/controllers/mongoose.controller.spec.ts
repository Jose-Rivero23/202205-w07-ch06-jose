import { NextFunction, Request, Response } from 'express';
import { iRobot, Robot } from '../models/robot.model.js';
import { MongooseController } from './mongoose.controller.js';
jest.mock('../models/Robot.model.js');

describe('Given a function', () => {
  let controller: MongooseController<iRobot>;
  let req: Partial<Request>;
  let resp: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      params: { id: '1' },
      body: {},
    };
    resp = {
      setHeader: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    // eslint-disable-next-line no-unused-labels
    next: jest.fn();
  });
  // const Robot = {
  //     find: jest.fn(),
  //     findById: jest.fn(),
  //     create: jest.fn(),
  //     findByIdAndUpdate: jest.fn(),
  //     findByIdAndDelete: jest.fn(),
  // };
  controller = new MongooseController(Robot) as MongooseController<iRobot>;

  describe('When we call getAllController', () => {
    test('Then the resp.send should be called', async () => {
      const mockResult = [{ test: 'test' }];
      (Robot.find as jest.Mock).mockResolvedValue(mockResult);
      await controller.getAllController(req as Request, resp as Response);
      expect(resp.send).toHaveBeenCalled();
      expect(resp.setHeader).toHaveBeenCalled();
    });
  });

  describe('When we call getController', () => {
    test('Then the resp.send should be called', async () => {
      let mockResult = {
        name: 'test',
      };
      (Robot.findById as jest.Mock).mockResolvedValue(mockResult);

      await controller.getController(req as Request, resp as Response);
      expect(resp.send).toHaveBeenCalled();
      expect(resp.setHeader).toHaveBeenCalled();
      expect(resp.send).toHaveBeenCalledWith(JSON.stringify(mockResult));
    });
  });
  describe('When we call getController with a wrong id', () => {
    test('Then the resp.send should be called with a 404', async () => {
      (Robot.findById as jest.Mock).mockResolvedValue(null);
      await controller.getController(req as Request, resp as Response);
      expect(resp.status).toHaveBeenCalledWith(404);
    });
  });
  describe('When we call postController', () => {
    test('Then the resp.send should be called', async () => {
      let mockNewItem = {
        name: 'test',
      };
      (Robot.create as jest.Mock).mockResolvedValue(mockNewItem);
      await controller.postController(
        req as Request,
        resp as Response,
        next as NextFunction
      );
      expect(resp.send).toHaveBeenCalled();
      expect(resp.setHeader).toHaveBeenCalled();
      expect(resp.send).toHaveBeenCalledWith(JSON.stringify(mockNewItem));
      expect(resp.status).toHaveBeenCalledWith(201);
    });
  });
  describe('When we call patchController', () => {
    test('Then the resp.send should be called', async () => {
      let mockResult = { test: 'test' };
      (Robot.findByIdAndUpdate as jest.Mock).mockResolvedValue(mockResult);
      await controller.patchController(req as Request, resp as Response);
      expect(resp.send).toHaveBeenCalled();
      expect(resp.setHeader).toHaveBeenCalled();
      expect(resp.send).toHaveBeenCalledWith(JSON.stringify(mockResult));
    });
  });
  describe('When we call deleteController', () => {
    test('Then the resp.send should be called', async () => {
      (Robot.findByIdAndDelete as jest.Mock).mockResolvedValue({});
      await controller.deleteController(req as Request, resp as Response);
      expect(resp.send).toHaveBeenCalledWith(JSON.stringify({}));
    });
  });
});
