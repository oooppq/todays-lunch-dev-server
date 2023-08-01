"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const changePassword_1 = require("../controllers/changePassword");
const router = (0, express_1.Router)();
router.patch('/', changePassword_1.changePassword);
exports.default = router;
