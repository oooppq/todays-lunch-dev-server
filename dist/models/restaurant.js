"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
class Restaurant {
    constructor(id, restaurantName, imageUrl, latitude, longitude, locationCategory, locationTag, foodCategory, rating, reviewCount, liked) {
        this.id = id;
        this.restaurantName = restaurantName;
        this.imageUrl = imageUrl;
        this.latitude = latitude;
        this.longitude = longitude;
        this.locationCategory = locationCategory;
        this.locationTag = locationTag;
        this.foodCategory = foodCategory;
        this.rating = rating;
        this.reviewCount = reviewCount;
        this.liked = liked;
    }
}
exports.Restaurant = Restaurant;
