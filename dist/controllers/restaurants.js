"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestaurants = void 0;
const restaurants_1 = require("../models/restaurants");
const RESTAUR = [];
const createRestaurants = (req, res, next) => {
    const text = req.body.text;
    const newRestaurants = new restaurants_1.Restaurants(Math.random().toString(), text);
};
exports.createRestaurants = createRestaurants;
