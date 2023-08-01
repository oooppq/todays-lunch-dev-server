import { RequestHandler } from 'express';

const RES = true;

export const logout: RequestHandler = (req, res, next) => {
  res.json(RES);
};
