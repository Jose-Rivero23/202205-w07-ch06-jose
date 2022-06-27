import { Router } from 'express';
import { MongooseController } from '../controllers/user.controller.js';
import { User } from '../models/user.model.js';

export const userController = new MongooseController(User);
export const userRouter = Router();

userRouter.get('/', userController.getAllController);
userRouter.get('/:id', userController.getController);
userRouter.post('/', userController.postController);
userRouter.patch('/:id', userController.patchController);
userRouter.delete('/:id', userController.deleteController);
