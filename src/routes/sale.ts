import { Router } from 'express';
import { getSales } from '../controllers/sale';

const router = Router();

router.get('/', getSales);

export default router;
