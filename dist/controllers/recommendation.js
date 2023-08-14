"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecommendations = void 0;
const constants_1 = require("../constants");
const getRecommendations = (req, res, next) => {
    res.json(constants_1.RECOMMENDATIONS);
    // res.status(404).json();
};
exports.getRecommendations = getRecommendations;
