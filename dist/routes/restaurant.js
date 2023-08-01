"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurant_1 = require("../controllers/restaurant");
const router = (0, express_1.Router)();
router.post('/', restaurant_1.createRestaurant);
router.get('/', restaurant_1.getRestaurants);
router.get('/judges', restaurant_1.getJudges);
router.post('/judges', restaurant_1.createJudge);
router.get('/judges/:id', restaurant_1.getJudgeDetail);
router.post('/judges/:id/agree', restaurant_1.judgeAgree);
router.get('/:id', restaurant_1.getRestaurantDetail);
router.get('/:id/menus', restaurant_1.getMenus);
router.post('/:id/menus', restaurant_1.createMenu);
router.delete('/:id/menus/:menuId', restaurant_1.deleteMenu);
router.patch('/:id/menus/:menuId', restaurant_1.updateMenu);
router.get('/:id/reviews', restaurant_1.getReviews);
router.post('/:id/reviews', restaurant_1.createReview);
router.post('/:id/reviews/:reviewId/like', restaurant_1.likeReview);
router.patch('/:id/reviews/:reviewId', restaurant_1.updateReview);
router.delete('/:id/reviews/:reviewId', restaurant_1.deleteReview);
router.post('/:id/mystore', restaurant_1.pushLike);
router.patch('/:id/recommend-category', restaurant_1.updateRecommendTag);
// router.patch('/:id', updateRestaurant);
// router.delete('/:id', deleteRestaurant);
exports.default = router;
