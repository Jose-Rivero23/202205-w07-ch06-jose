import { Router } from 'express';

const router = Router();

router.get('/', (req, resp) => {
  resp.setHeader('Content-type', 'text-html');
  resp.end(`<h1>App Back-end(Express)/ Front (Angular)</h1>
    <div><img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="pikachu" width="79" height="78" class="imgr"
        />
        <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="pikachu" width="79" height="78" class="imgr" id="imgr2"
        />
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
    </style></div>
    `);
});

export default router;
