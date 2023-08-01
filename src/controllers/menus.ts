import { RequestHandler } from 'express';
// import { MENU_PHOTOS } from '../constants';

let MENU_PHOTOS = [
  {
    id: 3,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
    member: {
      id: 1,
      nickname: 'jongmi',
    },
  },
  {
    id: 15,
    imageUrl:
      'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
    member: {
      id: 2,
      nickname: 'jongmi',
    },
  },
];

export const getMenuPhotos: RequestHandler = (req, res) => {
  res.json(MENU_PHOTOS);
};

export const addMenuPhoto: RequestHandler = (req, res) => {
  console.log(req.body.menuImage);
  res.status(200).json();
};

export const deleteMenuPhoto: RequestHandler = (req, res) => {
  const id = Number(req.params.photoId);
  MENU_PHOTOS = MENU_PHOTOS.filter((photo) => photo.id !== id);
  res.status(200).json();
};
