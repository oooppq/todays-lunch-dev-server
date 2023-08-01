import { RequestHandler } from 'express';
import { USER } from '../constants';

const LOGIN_INFO = {
  id: 1,
  accessToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYTEyMzIzQG5hdmVyLmNvbSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2OTAzNTU5ODgsImV4cCI6MTY5MDM1Nzc4OH0.8hCJ0-uBsFcXMPucXrZozwHAfOaxLWE4QI4ZUL_yK0g',
  refreshToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTA0NDIzODh9.CgUs6e_YDF4iqQb7-CnD4K_e_X4UEWtQarH6BIO3mHo',
  refreshTokenExpiresTime: 86400000,
  temporary: false,
};

export const postLogin: RequestHandler = (req, res, next) => {
  if (req.body.email === USER.email && req.body.password === USER.password) {
    res.json(LOGIN_INFO);
  } else {
    res.status(401).json();
  }
};

export const refresh: RequestHandler = (req, res) => {
  const parsed = req.headers.authorization?.split(' ') as string[];
  if (parsed.length !== 2) {
    res.status(404).json();
  } else {
    const token = parsed[1];
    if (token === LOGIN_INFO.refreshToken)
      // console.log(req.headers.authorization);
      res.json(LOGIN_INFO);
    else {
      res.status(401).json();
    }
  }
};
