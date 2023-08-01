import { Router } from 'express';
import {
  getMypage,
  updateIcon,
  updateNickname,
  updateLocationCategory,
  updateFoodCategory,
} from '../controllers/mypage';

const router = Router();

router.get('/', getMypage);
router.patch('/icon', updateIcon);
router.patch('/nickname', updateNickname);
router.patch('/location-category', updateLocationCategory);
router.patch('/food-category', updateFoodCategory);

export default router;
