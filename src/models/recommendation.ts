export class Recommendation {
  constructor(
    public id: number,
    public restaurantName: string,
    public locationCategory: string,
    public locationTag: string,
    public foodCategory: string,
    public rating: number,
    public bestReview: string,
    public imageUrl: string,
    public reviewCount: number,
    public lowestPrice: number,
    public liked: boolean
  ) {}
}
