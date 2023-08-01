import { RequestHandler } from 'express';
import { Recommendation } from '../models/recommendation';
import { RECOMMENDATIONS } from '../constants';

export const getRecommendations: RequestHandler = (req, res, next) => {
  res.json(RECOMMENDATIONS);
};
