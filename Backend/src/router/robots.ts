import { Router } from 'express';
import { MangostaController } from '../controllers/mangosta.controller.js';
import { Robot } from '../models/robot.model.js';

export const robotController = new MangostaController(Robot);
export const robotRouter = Router();

robotRouter.get('/', robotController.getAllController);
robotRouter.get('/:id', robotController.getController);
robotRouter.post('/', robotController.postController);
robotRouter.patch('/:id', robotController.patchController);
robotRouter.delete('/:id', robotController.deleteController);
