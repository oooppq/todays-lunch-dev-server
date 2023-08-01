import { Router } from 'express';
import { checkPassword } from '../controllers/checkPassword';

const router = Router();

router.post('/', checkPassword);

export default router;
