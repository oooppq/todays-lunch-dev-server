import { Router } from 'express';
import { getLocCat } from '../controllers/categories';

const router = Router();

router.get('/', getLocCat);

export default router;
