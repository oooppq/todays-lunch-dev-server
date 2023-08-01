export class Restaurant {
  constructor(
    public id: number,
    public restaurantName: string,
    public imageUrl: string,
    public latitude: number,
    public longitude: number,
    public locationCategory: string,
    public locationTag: string,
    public foodCategory: string,
    public rating: number,
    public reviewCount: number,
    public liked: boolean
  ) {}
}
