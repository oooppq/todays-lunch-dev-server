import { RequestHandler } from 'express';
import { USER } from '../constants';

export const changePassword: RequestHandler = (req, res, next) => {
  USER.password = req.body.password;
  res.status(200).json();
};
