import { Router } from 'express';
import { sendVerification } from '../controllers/email';

const router = Router();

router.post('/', sendVerification);
export default router;
