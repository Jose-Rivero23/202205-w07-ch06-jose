import { NextFunction,Request,Response } from "express";
import {Model} from 'mongoose',

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

export class MangostaController<T>{
    constructor(public model: Model<T>){}

getAllcontroller= async (req : Request, resp : Response) =>{
    req;
    resp.setHeader('Content-type', 'text-html');
    resp.end (`<h1>ROBOTS LIST</h1>
    
    <div>${JSON.stringify(await this.model.find())}</div>
    <div>${template}</div>   `);

}

getController = async (req:Request,resp : Response) =>{}

}