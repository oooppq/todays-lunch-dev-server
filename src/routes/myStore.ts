import { Router } from 'express';
import { getMyStore } from '../controllers/mypage';

const router = Router();

router.get('/', getMyStore);

export default router;
