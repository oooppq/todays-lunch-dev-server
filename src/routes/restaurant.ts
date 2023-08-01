import { Router } from 'express';

import {
  createRestaurant,
  getRestaurants,
  getJudges,
  getJudgeDetail,
  judgeAgree,
  // updateRestaurant,
  // deleteRestaurant,
  getRestaurantDetail,
  updateRecommendTag,
  pushLike,
  getMenus,
  createMenu,
  deleteMenu,
  updateMenu,
  getReviews,
  createReview,
  likeReview,
  updateReview,
  deleteReview,
  createJudge,
} from '../controllers/restaurant';

const router = Router();

router.post('/', createRestaurant);

router.get('/', getRestaurants);

router.get('/judges', getJudges);
router.post('/judges', createJudge);
router.get('/judges/:id', getJudgeDetail);
router.post('/judges/:id/agree', judgeAgree);

router.get('/:id', getRestaurantDetail);

router.get('/:id/menus', getMenus);
router.post('/:id/menus', createMenu);
router.delete('/:id/menus/:menuId', deleteMenu);
router.patch('/:id/menus/:menuId', updateMenu);

router.get('/:id/reviews', getReviews);
router.post('/:id/reviews', createReview);
router.post('/:id/reviews/:reviewId/like', likeReview);
router.patch('/:id/reviews/:reviewId', updateReview);
router.delete('/:id/reviews/:reviewId', deleteReview);

router.post('/:id/mystore', pushLike);

router.patch('/:id/recommend-category', updateRecommendTag);

// router.patch('/:id', updateRestaurant);

// router.delete('/:id', deleteRestaurant);

export default router;
