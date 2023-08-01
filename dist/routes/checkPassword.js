"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkPassword_1 = require("../controllers/checkPassword");
const router = (0, express_1.Router)();
router.post('/', checkPassword_1.checkPassword);
exports.default = router;
