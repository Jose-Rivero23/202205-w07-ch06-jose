/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';

import { iUser, User } from '../models/user.model.js';

export class MongooseController<T> {
  constructor(public model: Model<T>) {}

  getAllController = async (req: Request, resp: Response) => {
    req;
    resp.setHeader('Content-type', 'application/json');
    resp.send(
      JSON.stringify(
        await this.model.find().populate('pilot', {
          robots: 0,
          _id: 0,
        })
      )
    );
  };

  getController = async (req: Request, resp: Response) => {
    resp.setHeader('Content-type', 'application/json');

    const result = await this.model.findById(req.params.id).populate('pilot', {
      robots: 0,
      _id: 0,
    });
    if (result) {
      resp.send(JSON.stringify(result));
    } else {
      resp.status(404);
      resp.send(JSON.stringify({}));
    }
  };

  postController = async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const newItem = await this.model.create(req.body);
      const user = await User.findById(req.body.responsible);
      (user?.robots as Array<string>).push(newItem.id);
      await user?.save();

      resp.setHeader('Content-type', 'application/json');
      resp.status(201);
      resp.send(JSON.stringify(newItem));
    } catch (error) {
      next(error);
    }
  };

  patchController = async (req: Request, resp: Response) => {
    const newItem = await this.model.findByIdAndUpdate(req.params.id, req.body);
    resp.setHeader('Content-type', 'application/json');
    resp.send(JSON.stringify(newItem));
  };

  deleteController = async (req: Request, resp: Response) => {
    const deleteItem = await this.model.findByIdAndDelete(req.params.id);
    // resp.status(status);
    resp.send(JSON.stringify(deleteItem));
  };
}
