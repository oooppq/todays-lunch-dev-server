import { Router } from 'express';
import { changePassword } from '../controllers/changePassword';

const router = Router();

router.patch('/', changePassword);

export default router;
