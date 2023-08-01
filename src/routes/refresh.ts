import { Router } from 'express';
import { refresh } from '../controllers/login';

const router = Router();

router.post('/', refresh);

export default router;
