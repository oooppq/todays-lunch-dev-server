"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
class Sale {
    constructor(id, restaurant_id, menu_name, restaurant_name, original_price, sale_price) {
        this.id = id;
        this.restaurant_id = restaurant_id;
        this.menu_name = menu_name;
        this.restaurant_name = restaurant_name;
        this.original_price = original_price;
        this.sale_price = sale_price;
    }
}
exports.Sale = Sale;
