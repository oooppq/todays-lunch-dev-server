import { RequestHandler } from 'express';

export const register: RequestHandler = (req, res, next) => {
  console.log(req.body);
  res.status(200).json();
};
