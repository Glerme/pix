import { Router } from 'express';
import { helloGet } from '../endpoint/hello';

const router = Router();

/**
 * GET /hello
 * @tag hello
 * @response 204
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get('/hello', helloGet);

export default router;
