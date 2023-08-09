"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuPhoto = exports.addMenuPhoto = exports.getMenuPhotos = void 0;
const constants_1 = require("../constants");
// let MENU_PHOTOS = [
//   {
//     id: 3,
//     imageUrl:
//       'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/958321eb-9ce9-43e7-99e5-9fc03daa089e_IMG_3293.jpg',
//     member: {
//       id: 1,
//       nickname: 'jongmi',
//     },
//   },
//   {
//     id: 15,
//     imageUrl:
//       'https://todays-lunch-bucket.s3.ap-northeast-2.amazonaws.com/menu/2023/03/24/4c9db490-1f44-4c40-92b8-f0b0bd0e6711_IMG_3293.jpg',
//     member: {
//       id: 2,
//       nickname: 'jongmi',
//     },
//   },
// ];
const getMenuPhotos = (req, res) => {
    const page = Number(req.query.page) - 1;
    res.json({
        data: constants_1.MENU_PHOTOS.slice(8 * page, 8 * (page + 1)),
        totalPages: Math.ceil(constants_1.MENU_PHOTOS.length / 8),
    });
};
exports.getMenuPhotos = getMenuPhotos;
const addMenuPhoto = (req, res) => {
    console.log(req.body.menuImage);
    res.status(200).json();
};
exports.addMenuPhoto = addMenuPhoto;
const deleteMenuPhoto = (req, res) => {
    const id = Number(req.params.photoId);
    const photos = constants_1.MENU_PHOTOS.filter((photo) => photo.id !== id);
    while (constants_1.MENU_PHOTOS.length)
        constants_1.MENU_PHOTOS.pop();
    photos.forEach((photo) => {
        constants_1.MENU_PHOTOS.push(photo);
    });
    // MENU_PHOTOS = MENU_PHOTOS.filter((photo) => photo.id !== id);
    res.status(200).json();
};
exports.deleteMenuPhoto = deleteMenuPhoto;
