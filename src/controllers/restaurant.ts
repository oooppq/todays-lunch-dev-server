import { RequestHandler } from 'express';
import { Restaurant } from '../models/restaurant';
import {
  DETAILS,
  JUDGES,
  MENUS,
  RECOMMENDATIONS,
  RESTAURANTS,
  REVIEWS,
} from '../constants';

export const pushLike: RequestHandler = (req, res, next) => {
  const restId = Number(req.params.id);
  RESTAURANTS[restId - 1].liked = !RESTAURANTS[restId - 1].liked;
  if (restId <= DETAILS.length) {
    DETAILS[restId - 1].liked = !DETAILS[restId - 1].liked;
  }
  if (restId <= RECOMMENDATIONS.length) {
    RECOMMENDATIONS[restId - 1].liked = !RECOMMENDATIONS[restId - 1].liked;
  }
  res.status(200).json();
};

export const createRestaurant: RequestHandler = (req, res, next) => {
  // const text = (req.body as { text: string }).text;
  // const newRestaurant = new Restaurant(RESTAURANTS.length, );

  // RESTAURANTS.push(newRestaurant);

  res.status(201).json({
    message: 'Created the restaurant.',
    // createdRestaurant: newRestaurant,
  });
};

export const getRestaurants: RequestHandler = (req, res, next) => {
  console.log(req.query);
  const locCat = req.query['location-category'];
  const locTag = req.query['location-tag'];
  const foodCat = req.query['food-category'];
  const keyword = req.query.keyword as string;
  const page = Number(req.query.page) - 1;
  const rests = RESTAURANTS.filter(
    (rest) => rest.locationCategory === (locCat || rest.locationCategory)
  )
    .filter((rest) => rest.locationTag === (locTag || rest.locationTag))
    .filter((rest) => rest.foodCategory === (foodCat || rest.foodCategory))
    .filter((rest) =>
      rest.restaurantName.includes(keyword || rest.restaurantName)
    );
  console.log(rests.length / 4, Math.ceil(rests.length / 4));
  res.json({
    data: rests.slice(4 * page, 4 * (page + 1)),
    totalPages: Math.ceil(rests.length / 4),
  });
};

export const getRestaurantDetail: RequestHandler = (req, res, next) => {
  const restId = req.params.id;
  res.json(DETAILS[Number(restId) - 1]);
};

export const getMenus: RequestHandler = (req, res, next) => {
  const restId = Number(req.params.id);

  res.json(MENUS[restId - 1]);
};

export const createMenu: RequestHandler = (req, res, next) => {
  // console.log(req.body);
  const restId = Number(req.params.id) - 1;
  MENUS[restId].push({
    ...req.body,
    id: MENUS[restId].length + 1,
    photoNum: 2,
  });

  res.status(200).json();
};

export const deleteMenu: RequestHandler = (req, res, next) => {
  const restId = Number(req.params.id) - 1;
  MENUS[restId] = MENUS[restId].filter(
    (menu) => menu.id !== Number(req.params.menuId)
  );

  res.status(200).json();
};

export const updateMenu: RequestHandler = (req, res, next) => {
  const restId = Number(req.params.id) - 1;
  const menus = MENUS[restId];
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

export const getReviews: RequestHandler = (req, res, next) => {
  // const restId = Number(req.params.id);
  const page = Number(req.query.page) - 1;
  const revs = [...REVIEWS];
  if (req.query.sort === 'likeCount')
    revs.sort((a, b) => {
      if (req.query.order === 'ascending') return a.likeCount - b.likeCount;
      return b.likeCount - a.likeCount;
    });
  else if (req.query.sort === 'rating')
    revs.sort((a, b) => {
      if (req.query.order === 'ascending') return a.rating - b.rating;
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

export const createReview: RequestHandler = (req, res, next) => {
  const content = req.body.reviewContent;
  const rating = Number(req.body.rating);
  REVIEWS.push({
    id: REVIEWS.length + 1,
    reviewId: REVIEWS.length + 1,
    restaurantId: 1,
    restaurantName: '가츠벤또',
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
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

export const updateReview: RequestHandler = (req, res, next) => {
  const id = Number(req.params.reviewId);
  for (const review of REVIEWS) {
    if (review.id === id) {
      review.rating = Number(req.body.rating);
      review.reviewContent = req.body.reviewContent;
    }
  }
  res.status(200).json();
};

export const deleteReview: RequestHandler = (req, res, next) => {
  const id = Number(req.params.reviewId);
  const revs = [...REVIEWS.filter((review) => review.id !== id)];

  while (REVIEWS.length) REVIEWS.pop();
  revs.forEach((rev) => {
    REVIEWS.push(rev);
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

export const likeReview: RequestHandler = (req, res, next) => {
  for (const review of REVIEWS) {
    if (review.id === Number(req.params.reviewId)) {
      review.liked = !review.liked;
    }
  }
  res.status(200).json();
};

export const updateRestaurant: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const restId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  // const restIdx = RESTAURANTS.findIndex((rest) => rest.id === restId);

  // if (restIdx < 0) {
  //   throw new Error('Could not find todo!');
  // }

  // RESTAURANTS[restIdx] = new Restaurant(restId, updatedText);

  // res.json({ message: 'Updated!', updatedRestaurant: RESTAURANTS[restIdx] });
  res.json({ message: 'Updated!' });
};

export const updateRecommendTag: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const restId = req.params.id;
  console.log(req.body);
  res.status(200).json();
};

export const deleteRestaurant: RequestHandler = (req, res, next) => {
  const restId = req.params.id;

  // const restIdx = RESTAURANTS.findIndex((rest) => rest.id === restId);

  // if (restIdx < 0) {
  //   throw new Error('Could not find todo!');
  // }

  // RESTAURANTS.splice(restIdx, 1);

  // res.json({ message: 'deleted!' });
};

export const getJudges: RequestHandler = (req, res) => {
  res.json(JUDGES);
};

export const createJudge: RequestHandler = (req, res) => {
  console.log(req.body);
  const newJudge = {
    id: JUDGES.data.length + 1,
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
  JUDGES.data.push(newJudge);
  res.status(200).json();
};

export const getJudgeDetail: RequestHandler = (req, res) => {
  const restId = Number(req.params.id) - 1;
  res.json(JUDGES.data[restId]);
};

export const judgeAgree: RequestHandler = (req, res) => {
  const restId = Number(req.params.id) - 1;
  JUDGES.data[restId].agreed = !JUDGES.data[restId].agreed;
  if (JUDGES.data[restId].agreed) JUDGES.data[restId].agreementCount += 1;
  else JUDGES.data[restId].agreementCount -= 1;
  res.status(200).json();
};
