import { RequestHandler } from 'express';

export const sendVerification: RequestHandler = (req, res, next) => {
  console.log(req.query.email);
  res.json('test');
};
