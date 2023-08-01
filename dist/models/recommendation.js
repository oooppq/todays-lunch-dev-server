"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recommendation = void 0;
class Recommendation {
    constructor(id, restaurantName, locationCategory, locationTag, foodCategory, rating, bestReview, imageUrl, reviewCount, lowestPrice, liked) {
        this.id = id;
        this.restaurantName = restaurantName;
        this.locationCategory = locationCategory;
        this.locationTag = locationTag;
        this.foodCategory = foodCategory;
        this.rating = rating;
        this.bestReview = bestReview;
        this.imageUrl = imageUrl;
        this.reviewCount = reviewCount;
        this.lowestPrice = lowestPrice;
        this.liked = liked;
    }
}
exports.Recommendation = Recommendation;
