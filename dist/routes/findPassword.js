"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const findPassword_1 = require("../controllers/findPassword");
const router = (0, express_1.Router)();
router.post('/', findPassword_1.findPassword);
exports.default = router;
