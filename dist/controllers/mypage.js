"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyStore = exports.getMyReviews = exports.updateFoodCategory = exports.updateLocationCategory = exports.updateNickname = exports.updateIcon = exports.getMypage = void 0;
const constants_1 = require("../constants");
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
const getMypage = (req, res, next) => {
    res.json(USER_INFO);
};
exports.getMypage = getMypage;
const updateIcon = (req, res) => {
    console.log(req.body);
    USER_INFO.icon = 'https://cdn.imagin.studio/getimage/';
    res.status(200).json();
};
exports.updateIcon = updateIcon;
const updateNickname = (req, res) => {
    USER_INFO.nickname = req.body.nickname;
    res.status(200).json();
};
exports.updateNickname = updateNickname;
const updateLocationCategory = (req, res) => {
    USER_INFO.locationCategoryList = req.body.categoryList;
    res.status(200).json();
};
exports.updateLocationCategory = updateLocationCategory;
const updateFoodCategory = (req, res) => {
    USER_INFO.foodCategoryList = req.body.categoryList;
    res.status(200).json();
};
exports.updateFoodCategory = updateFoodCategory;
const getMyReviews = (req, res) => {
    // res.json(MY_REVIEWS);
    res.json({
        data: constants_1.REVIEWS.filter((review) => review.member.id === 1),
        totalPages: 1,
    });
};
exports.getMyReviews = getMyReviews;
const getMyStore = (req, res) => {
    res.json({ data: constants_1.RESTAURANTS.filter((rest) => rest.liked), totalPages: 1 });
};
exports.getMyStore = getMyStore;
