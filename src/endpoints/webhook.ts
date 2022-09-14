import { RequestHandler } from 'express';
import fetch from 'node-fetch';

import formData from 'form-data';

export const webhook: RequestHandler = async (req, res) => {
  try {
    const dadosPix = req.body;

    const isEmpty =
      Object.keys(dadosPix).length === 0 && dadosPix.constructor === Object;

    if (isEmpty) {
      return res.status(400).json({
        error: 'Dados Inválidos. O objeto está vazio.',
      });
    }

    let body = new formData();
    body.append('data', JSON.stringify(dadosPix));
    let response = await fetch(
      'https://app.showdepremios.top/back-api/comp.php',
      {
        method: 'POST',
        body,
      },
    );
    let json = await response.json();

    return res.status(200).json(json);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
