import { Router } from 'express';
import { getFoodCat } from '../controllers/categories';

const router = Router();

router.get('/', getFoodCat);

export default router;
