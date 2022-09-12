import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';
import { RequestHandler } from 'express';

export const generatePix: RequestHandler = async (req, res) => {
  try {
    const { valor } = req.body;

    const url = `${process.env.URL_OPENPIX}/charge`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: process.env.APPID_OPENPIX || '',
      },
      body: JSON.stringify({
        correlationID: uuidv4(),
        value: valor,
        expiresIn: 3600,
      }),
    });

    const responseJson = await response.json();

    if (response.status !== 200) {
      throw new Error(JSON.stringify(responseJson));
    }

    return res.status(200).json(responseJson);
  } catch (error: any) {
    const err = JSON.parse(error.message);
    console.error('ERROR POST /generate-pix => ', err);
    return res.status(500).json(err);
  }
};
