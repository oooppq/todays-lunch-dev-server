"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSales = void 0;
const SALES = [
    {
        id: 1,
        restaurant_id: 1,
        menu_name: '더블 사케동',
        restaurant_name: '가츠벤또',
        original_price: 10000,
        sale_price: 7000,
    },
    {
        id: 2,
        restaurant_id: 1,
        menu_name: '더블더블더블 사케동',
        restaurant_name: '가츠벤또',
        original_price: 30000,
        sale_price: 10000,
    },
    {
        id: 3,
        restaurant_id: 1,
        menu_name: '따따따블 사케동',
        restaurant_name: '가츠벤또',
        original_price: 40000,
        sale_price: 13000,
    },
    {
        id: 4,
        restaurant_id: 1,
        menu_name: '미친따블 사케동',
        restaurant_name: '가츠벤또',
        original_price: 80000,
        sale_price: 23000,
    },
];
const getSales = (req, res, next) => {
    res.json(SALES);
};
exports.getSales = getSales;