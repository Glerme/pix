import { RequestHandler } from 'express';

export const helloGet: RequestHandler = (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  });
};
