"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recommendation_1 = require("../controllers/recommendation");
const router = (0, express_1.Router)();
router.get('/', recommendation_1.getRecommendations);
exports.default = router;
