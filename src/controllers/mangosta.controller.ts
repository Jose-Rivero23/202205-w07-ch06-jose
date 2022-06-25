/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';

const template = `<div>
            <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="pikachu" width="79" height="78" class="imgr"
        />
        <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="pikachu" width="79" height="78" class="imgr" id="imgr2"
        />
        </div>
     <style>
    @keyframes rotate {from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}}
    @-webkit-keyframes rotate {from {-webkit-transform: rotate(0deg);}
      to {-webkit-transform: rotate(360deg);}}
    .imgr{
        -webkit-animation: 3s rotate linear infinite;
        animation: 3s rotate linear infinite;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        
    }
    #imgr2 {
         -webkit-animation-direction: reverse;
         animation-direction: reverse;

    }
    </style>`;

export class MangostaController<T> {
    constructor(public model: Model<T>) {}

    getAllcontroller = async (req: Request, resp: Response) => {
        req;
        resp.setHeader('Content-type', 'text-html');
        resp.end(`<h1>ROBOTS LIST</h1>
    
    <div>${JSON.stringify(await this.model.find())}</div>
    <div>${template}</div>   `);
    };

    getController = async (req: Request, resp: Response) => {
        resp.setHeader('Content-type', 'application/json');
        console.log(req.params.id);
        const result = await this.model.findById(req.params.id);
        if (result) {
            resp.end(JSON.stringify(result));
        } else {
            resp.status(404);
            resp.end(JSON.stringify({}));
        }
    };
    postController = async (
        req: Request,
        resp: Response,
        next: NextFunction
    ) => {
        try {
            const newItem = await this.model.create(req.body);
            resp.setHeader('Content-type', 'application/json');
            resp.status(201);
            resp.end(JSON.stringify(newItem));
        } catch (error) {
            next(error as Error);
        }
    };

    patchController = async (req: Request, resp: Response) => {
        const newItem = await this.model.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        resp.setHeader('Content-type', 'application/json');
        resp.end(JSON.stringify(newItem));
    };

    deleteController = async (req: Request, resp: Response) => {
        const deleteItem = await this.model.findByIdAndDelete(req.params.id);

        // resp.status(200);
        resp.end(JSON.stringify({}));
    };
}
