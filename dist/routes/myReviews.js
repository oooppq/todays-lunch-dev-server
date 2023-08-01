"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mypage_1 = require("../controllers/mypage");
const router = (0, express_1.Router)();
router.get('/', mypage_1.getMyReviews);
exports.default = router;
