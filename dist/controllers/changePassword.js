"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = void 0;
const constants_1 = require("../constants");
const changePassword = (req, res, next) => {
    constants_1.USER.password = req.body.password;
    res.status(200).json();
};
exports.changePassword = changePassword;
