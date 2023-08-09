"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.judgeAgree = exports.getJudgeDetail = exports.createJudge = exports.getJudges = exports.deleteRestaurant = exports.updateRecommendTag = exports.updateRestaurant = exports.likeReview = exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviews = exports.updateMenu = exports.deleteMenu = exports.createMenu = exports.getMenus = exports.getRestaurantDetail = exports.getRestaurants = exports.createRestaurant = exports.pushLike = void 0;
const constants_1 = require("../constants");
const pushLike = (req, res, next) => {
    const restId = Number(req.params.id);
    constants_1.RESTAURANTS[restId - 1].liked = !constants_1.RESTAURANTS[restId - 1].liked;
    if (restId <= constants_1.DETAILS.length) {
        constants_1.DETAILS[restId - 1].liked = !constants_1.DETAILS[restId - 1].liked;
    }
    if (restId <= constants_1.RECOMMENDATIONS.length) {
        constants_1.RECOMMENDATIONS[restId - 1].liked = !constants_1.RECOMMENDATIONS[restId - 1].liked;
    }
    res.status(200).json();
};
exports.pushLike = pushLike;
const createRestaurant = (req, res, next) => {
    // const text = (req.body as { text: string }).text;
    // const newRestaurant = new Restaurant(RESTAURANTS.length, );
    // RESTAURANTS.push(newRestaurant);
    res.status(201).json({
        message: 'Created the restaurant.',
        // createdRestaurant: newRestaurant,
    });
};
exports.createRestaurant = createRestaurant;
const getRestaurants = (req, res, next) => {
    console.log(req.query);
    const locCat = req.query['location-category'];
    const locTag = req.query['location-tag'];
    const foodCat = req.query['food-category'];
    const keyword = req.query.keyword;
    const page = Number(req.query.page) - 1;
    const rests = constants_1.RESTAURANTS.filter((rest) => rest.locationCategory === (locCat || rest.locationCategory))
        .filter((rest) => rest.locationTag === (locTag || rest.locationTag))
        .filter((rest) => rest.foodCategory === (foodCat || rest.foodCategory))
        .filter((rest) => rest.restaurantName.includes(keyword || rest.restaurantName));
    console.log(rests.length / 4, Math.ceil(rests.length / 4));
    res.json({
        data: rests.slice(4 * page, 4 * (page + 1)),
        totalPages: Math.ceil(rests.length / 4),
    });
};
exports.getRestaurants = getRestaurants;
const getRestaurantDetail = (req, res, next) => {
    const restId = req.params.id;
    res.json(constants_1.DETAILS[Number(restId) - 1]);
};
exports.getRestaurantDetail = getRestaurantDetail;
const getMenus = (req, res, next) => {
    const restId = Number(req.params.id);
    res.json(constants_1.MENUS[restId - 1]);
};
exports.getMenus = getMenus;
const createMenu = (req, res, next) => {
    // console.log(req.body);
    const restId = Number(req.params.id) - 1;
    constants_1.MENUS[restId].push({
        ...req.body,
        id: constants_1.MENUS[restId].length + 1,
        photoNum: 2,
    });
    res.status(200).json();
};
exports.createMenu = createMenu;
const deleteMenu = (req, res, next) => {
    const restId = Number(req.params.id) - 1;
    constants_1.MENUS[restId] = constants_1.MENUS[restId].filter((menu) => menu.id !== Number(req.params.menuId));
    res.status(200).json();
};
exports.deleteMenu = deleteMenu;
const updateMenu = (req, res, next) => {
    const restId = Number(req.params.id) - 1;
    const menus = constants_1.MENUS[restId];
    for (let i = 0; i < menus.length; i += 1) {
        if (menus[i].id === Number(req.params.menuId)) {
            menus[i].name = req.body.name;
            menus[i].price = Number(req.body.price);
            menus[i].salePrice = Number(req.body.salePrice) || null;
            menus[i].saleComment = req.body.saleComment;
            break;
        }
    }
    res.status(200).json();
};
exports.updateMenu = updateMenu;
const getReviews = (req, res, next) => {
    // const restId = Number(req.params.id);
    const page = Number(req.query.page) - 1;
    const revs = [...constants_1.REVIEWS];
    if (req.query.sort === 'likeCount')
        revs.sort((a, b) => {
            if (req.query.order === 'ascending')
                return a.likeCount - b.likeCount;
            return b.likeCount - a.likeCount;
        });
    else if (req.query.sort === 'rating')
        revs.sort((a, b) => {
            if (req.query.order === 'ascending')
                return a.rating - b.rating;
            return b.rating - a.rating;
        });
    // if(req.query.order === 'descending')
    //   revs.sort()
    console.log(revs.length / 3);
    res.json({
        data: revs.slice(3 * page, 3 * (page + 1)),
        totalPages: Math.ceil(revs.length / 3),
    });
};
exports.getReviews = getReviews;
const createReview = (req, res, next) => {
    const content = req.body.reviewContent;
    const rating = Number(req.body.rating);
    constants_1.REVIEWS.push({
        id: constants_1.REVIEWS.length + 1,
        reviewId: constants_1.REVIEWS.length + 1,
        restaurantId: 1,
        restaurantName: '가츠벤또',
        imageUrl: 'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
        member: {
            id: 1,
            email: 'jp38@naver.com',
            nickname: 'jong',
            icon: null,
        },
        reviewContent: content,
        rating: rating,
        createdDate: '2023-03-24',
        likeCount: 1,
        liked: true,
    });
    res.status(200).json();
};
exports.createReview = createReview;
const updateReview = (req, res, next) => {
    const id = Number(req.params.reviewId);
    for (const review of constants_1.REVIEWS) {
        if (review.id === id) {
            review.rating = Number(req.body.rating);
            review.reviewContent = req.body.reviewContent;
        }
    }
    res.status(200).json();
};
exports.updateReview = updateReview;
const deleteReview = (req, res, next) => {
    const id = Number(req.params.reviewId);
    const revs = [...constants_1.REVIEWS.filter((review) => review.id !== id)];
    while (constants_1.REVIEWS.length)
        constants_1.REVIEWS.pop();
    revs.forEach((rev) => {
        constants_1.REVIEWS.push(rev);
    });
    // REVIEWS = REVIEWS.filter((review) => review.id !== id);
    // for (const review of REVIEWS.data) {
    //   if (review.id === id) {
    //     review.rating = Number(req.body.rating);
    //     review.reviewContent = req.body.reviewContent;
    //   }
    // }
    res.status(200).json();
};
exports.deleteReview = deleteReview;
const likeReview = (req, res, next) => {
    for (const review of constants_1.REVIEWS) {
        if (review.id === Number(req.params.reviewId)) {
            review.liked = !review.liked;
        }
    }
    res.status(200).json();
};
exports.likeReview = likeReview;
const updateRestaurant = (req, res, next) => {
    const restId = req.params.id;
    const updatedText = req.body.text;
    // const restIdx = RESTAURANTS.findIndex((rest) => rest.id === restId);
    // if (restIdx < 0) {
    //   throw new Error('Could not find todo!');
    // }
    // RESTAURANTS[restIdx] = new Restaurant(restId, updatedText);
    // res.json({ message: 'Updated!', updatedRestaurant: RESTAURANTS[restIdx] });
    res.json({ message: 'Updated!' });
};
exports.updateRestaurant = updateRestaurant;
const updateRecommendTag = (req, res, next) => {
    const restId = req.params.id;
    console.log(req.body);
    res.status(200).json();
};
exports.updateRecommendTag = updateRecommendTag;
const deleteRestaurant = (req, res, next) => {
    const restId = req.params.id;
    // const restIdx = RESTAURANTS.findIndex((rest) => rest.id === restId);
    // if (restIdx < 0) {
    //   throw new Error('Could not find todo!');
    // }
    // RESTAURANTS.splice(restIdx, 1);
    // res.json({ message: 'deleted!' });
};
exports.deleteRestaurant = deleteRestaurant;
const getJudges = (req, res) => {
    res.json(constants_1.JUDGES);
};
exports.getJudges = getJudges;
const createJudge = (req, res) => {
    console.log(req.body);
    const newJudge = {
        id: constants_1.JUDGES.data.length + 1,
        restaurantName: req.body.restaurantName,
        introduction: req.body.introduction,
        registrant: 'honaldo',
        imageUrl: null,
        latitude: Number(req.body.latitude),
        longitude: Number(req.body.longitude),
        agreementCount: 0,
        locationCategory: '신촌',
        locationTag: '정문',
        foodCategory: '한식',
        agreed: false,
    };
    constants_1.JUDGES.data.push(newJudge);
    res.status(200).json();
};
exports.createJudge = createJudge;
const getJudgeDetail = (req, res) => {
    const restId = Number(req.params.id) - 1;
    res.json(constants_1.JUDGES.data[restId]);
};
exports.getJudgeDetail = getJudgeDetail;
const judgeAgree = (req, res) => {
    const restId = Number(req.params.id) - 1;
    constants_1.JUDGES.data[restId].agreed = !constants_1.JUDGES.data[restId].agreed;
    if (constants_1.JUDGES.data[restId].agreed)
        constants_1.JUDGES.data[restId].agreementCount += 1;
    else
        constants_1.JUDGES.data[restId].agreementCount -= 1;
    res.status(200).json();
};
exports.judgeAgree = judgeAgree;
