import { Router } from 'express';

import { template } from '../controllers/mangosta.controller.js';

const router = Router();

router.get('/', (req, resp) => {
    resp.setHeader('Content-type', 'text-html');
    resp.end(`<h1>App Back-end(Express)/ Front (Angular)</h1>
    <div>${template}</div>
    `);
});

export default router;
