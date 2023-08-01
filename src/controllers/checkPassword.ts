import { RequestHandler } from 'express';
import { USER } from '../constants';

export const checkPassword: RequestHandler = (req, res, next) => {
  console.log(req.headers.authorization);
  console.log(req.body.password);

  if (req.body.password === USER.password) {
    res.json(true);
  } else {
    res.json(false);
  }
  //   res.json(new Date().getTime() % 2);
};
