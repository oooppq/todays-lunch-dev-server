"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (req, res, next) => {
    console.log(req.body);
    res.status(200).json();
};
exports.register = register;
