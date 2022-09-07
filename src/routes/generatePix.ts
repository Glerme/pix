import { Router } from 'express';

import { generatePix } from '../endpoints/pix';

const router = Router();

router.post('/generate-pix', generatePix);

export default router;
