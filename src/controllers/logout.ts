import { RequestHandler } from 'express';

const RES = true;

export const logout: RequestHandler = (req, res, next) => {
  res.status(200).json();
};
