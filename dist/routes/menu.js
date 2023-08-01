"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menus_1 = require("../controllers/menus");
const router = (0, express_1.Router)();
router.get('/:menuId/images', menus_1.getMenuPhotos);
router.post('/:menuId/images', menus_1.addMenuPhoto);
router.delete('/:menuId/images/:photoId', menus_1.deleteMenuPhoto);
exports.default = router;
