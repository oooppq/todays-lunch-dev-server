import { Router } from 'express';
import { getRecomTag } from '../controllers/categories';

const router = Router();

router.get('/', getRecomTag);

export default router;
