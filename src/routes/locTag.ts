import { Router } from 'express';
import { getLocTag } from '../controllers/categories';

const router = Router();

router.get('/', getLocTag);

export default router;
