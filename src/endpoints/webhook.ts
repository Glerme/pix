import { RequestHandler } from 'express';
import fetch from 'node-fetch';

import formData from 'form-data';

export const webhook: RequestHandler = async (req, res) => {
  try {
    // const dadosPix = req.body;

    // const isEmpty =
    //   Object.keys(dadosPix).length === 0 && dadosPix.constructor === Object;

    // if (isEmpty) {
    //   return res.status(400).json({
    //     error: 'Dados Inválidos. O objeto está vazio.',
    //   });
    // }

    const obj = {
      event: 'OPENPIX:TRANSACTION_RECEIVED',
      charge: {
        customer: {
          name: 'Daniel Cordeiro',
          email: 'danielscordeiro7@gmail.com',
          phone: '+5533991279540',
          taxID: [Object],
          correlationID: '0242c894-9433-4819-960e-a7aad7cbf4a4',
        },
        value: 1500,
        identifier: 'cd079f3d50a44a97a7e4397784d13c6e',
        correlationID: 'e6d0fb5a-9bf3-4b0a-bf07-fbded02855c7',
        transactionID: 'cd079f3d50a44a97a7e4397784d13c6e',
        status: 'COMPLETED',
        giftbackAppliedValue: 0,
        discount: 0,
        valueWithDiscount: 1500,
        createdAt: '2022-09-13T17:49:07.378Z',
        paymentLinkID: '134af3ef-3668-4819-b24e-50341d72bead',
        additionalInfo: [],
        updatedAt: '2022-09-13T17:51:57.859Z',
        expiresIn: 3600,
        pixKey: '239583e1-0a51-4106-832b-b8b45a5a4065',
        brCode:
          '000201010212261030014br.gov.bcb.pix2581api.openpix.com.br/openpix/testing?transactionID=cd079f3d50a44a97a7e4397784d13c6e520400005303986540515.005802BR5917GFELIPE_SOLUTIONS6009Sao_Paulo62290525cd079f3d50a44a97a7e43977863040FF2',
        paymentLinkUrl:
          'https://openpix.com.br/pay/134af3ef-3668-4819-b24e-50341d72bead',
        qrCodeImage:
          'https://api.openpix.com.br/openpix/charge/brcode/image/134af3ef-3668-4819-b24e-50341d72bead.png',
        globalID: 'Q2hhcmdlOjYzMjBjMjkzMTI0ZjM2OTVhYjhlYzM2NA==',
      },
      pixQrCode: null,
      pix: {
        customer: {
          name: 'Daniel Cordeiro',
          email: 'danielscordeiro7@gmail.com',
          phone: '+5533991279540',
          taxID: [Object],
          correlationID: '0242c894-9433-4819-960e-a7aad7cbf4a4',
        },
        payer: {
          name: 'Sibelius Seraphini',
          taxID: [Object],
          email: 'sibelius@entria.com.br',
          phone: '+5511940468989',
          correlationID: '2b4f553c-5bc4-4910-8046-1d85b597af96',
        },
        charge: {
          customer: [Object],
          value: 1500,
          identifier: 'cd079f3d50a44a97a7e4397784d13c6e',
          correlationID: 'e6d0fb5a-9bf3-4b0a-bf07-fbded02855c7',
          transactionID: 'cd079f3d50a44a97a7e4397784d13c6e',
          status: 'COMPLETED',
          giftbackAppliedValue: 0,
          discount: 0,
          valueWithDiscount: 1500,
          createdAt: '2022-09-13T17:49:07.378Z',
          paymentLinkID: '134af3ef-3668-4819-b24e-50341d72bead',
          additionalInfo: [],
          updatedAt: '2022-09-13T17:51:57.859Z',
          expiresIn: 3600,
          brCode:
            '000201010212261030014br.gov.bcb.pix2581api.openpix.com.br/openpix/testing?transactionID=cd079f3d50a44a97a7e4397784d13c6e520400005303986540515.005802BR5917GFELIPE_SOLUTIONS6009Sao_Paulo62290525cd079f3d50a44a97a7e43977863040FF2',
          paymentLinkUrl:
            'https://openpix.com.br/pay/134af3ef-3668-4819-b24e-50341d72bead',
          qrCodeImage:
            'https://api.openpix.com.br/openpix/charge/brcode/image/134af3ef-3668-4819-b24e-50341d72bead.png',
          globalID: 'Q2hhcmdlOjYzMjBjMjkzMTI0ZjM2OTVhYjhlYzM2NA==',
        },
        value: 1500,
        time: '2022-09-13T17:51:57.817Z',
        endToEndId: '10cb17358ed542aab0aa9f427f79ccba',
        transactionID: 'cd079f3d50a44a97a7e4397784d13c6e',
        infoPagador: 'OpenPix testing',
        createdAt: '2022-09-13T17:51:57.824Z',
        globalID: 'UGl4VHJhbnNhY3Rpb246NjMyMGMzM2QxMjRmMzY5NWFiOGVjY2Ux',
      },
      company: {
        id: '63175dc5c0e24125dcbe4569',
        name: 'GUILHERME FELIPE DE LIMA GODOI 38808454843',
        taxID: '47011748000153',
      },
      account: {},
      refunds: [],
    };

    let body = new formData();
    body.append('data', JSON.stringify(obj));
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
