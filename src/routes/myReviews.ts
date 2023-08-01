import { Router } from 'express';
import { getMyReviews } from '../controllers/mypage';

const router = Router();

router.get('/', getMyReviews);

export default router;
