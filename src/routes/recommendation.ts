import { Router } from 'express';
import { getRecommendations } from '../controllers/recommendation';

const router = Router();

router.get('/', getRecommendations);

export default router;
