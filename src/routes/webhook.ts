import { Router } from 'express';

const router = Router();

router.post('/webhook', (req, res) => {
  console.log(req.body);

  res.send(200);
});

export default router;
