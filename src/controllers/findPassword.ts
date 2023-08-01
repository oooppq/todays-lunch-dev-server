import { RequestHandler } from 'express';

export const findPassword: RequestHandler = (req, res, next) => {
  console.log(req.query.email);
  res.json(new Date().getTime() % 2);
};
