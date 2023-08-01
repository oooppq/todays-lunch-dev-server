export class Sale {
  constructor(
    public id: number,
    public restaurant_id: number,
    public menu_name: string,
    public restaurant_name: string,
    public original_price: number,
    public sale_price: number
  ) {}
}
