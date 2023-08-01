"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sale_1 = require("../controllers/sale");
const router = (0, express_1.Router)();
router.get('/', sale_1.getSales);
exports.default = router;
