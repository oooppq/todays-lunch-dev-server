import { Router } from 'express';
import { findPassword } from '../controllers/findPassword';

const router = Router();

router.post('/', findPassword);

export default router;
