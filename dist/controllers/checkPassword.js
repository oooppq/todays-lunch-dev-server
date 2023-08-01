"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = void 0;
const constants_1 = require("../constants");
const checkPassword = (req, res, next) => {
    console.log(req.headers.authorization);
    console.log(req.body.password);
    if (req.body.password === constants_1.USER.password) {
        res.json(true);
    }
    else {
        res.json(false);
    }
    //   res.json(new Date().getTime() % 2);
};
exports.checkPassword = checkPassword;
