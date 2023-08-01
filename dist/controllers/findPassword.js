"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPassword = void 0;
const findPassword = (req, res, next) => {
    console.log(req.query.email);
    res.json(new Date().getTime() % 2);
};
exports.findPassword = findPassword;
