import { RequestHandler } from 'express';
import { MY_REVIEWS, RESTAURANTS, REVIEWS } from '../constants';

const USER_INFO = {
  id: 1,
  icon: 'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
  nickname: '오대균짱짱킹',
  email: 'oooppq@naver.com',
  reviewCount: 3,
  myJudgeCount: 31,
  paricipationCount: 4,
  contributionCount: 2,
  infoChangeCount: 2,
  locationCategoryList: [
    {
      id: 1,
      name: '서강대학교',
    },
  ],
  foodCategoryList: [
    {
      id: 1,
      name: '한식',
    },
    {
      id: 2,
      name: '중식',
    },
  ],
};

export const getMypage: RequestHandler = (req, res, next) => {
  res.json(USER_INFO);
};

export const updateIcon: RequestHandler = (req, res) => {
  console.log(req.body);
  USER_INFO.icon = 'https://cdn.imagin.studio/getimage/';
  res.status(200).json();
};

export const updateNickname: RequestHandler = (req, res) => {
  USER_INFO.nickname = req.body.nickname;
  res.status(200).json();
};
export const updateLocationCategory: RequestHandler = (req, res) => {
  USER_INFO.locationCategoryList = req.body.categoryList;
  res.status(200).json();
};

export const updateFoodCategory: RequestHandler = (req, res) => {
  USER_INFO.foodCategoryList = req.body.categoryList;
  res.status(200).json();
};

export const getMyReviews: RequestHandler = (req, res) => {
  res.json(MY_REVIEWS);
};

export const getMyStore: RequestHandler = (req, res) => {
  res.json({ data: RESTAURANTS.filter((rest) => rest.liked), totalPages: 1 });
};
