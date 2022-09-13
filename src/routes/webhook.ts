import { Router } from 'express';
import { webhook } from '../endpoints/webhook';

const router = Router();

router.post('/webhook', webhook);

export default router;
