"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerification = void 0;
const sendVerification = (req, res, next) => {
    console.log(req.query.email);
    res.json('test');
};
exports.sendVerification = sendVerification;
