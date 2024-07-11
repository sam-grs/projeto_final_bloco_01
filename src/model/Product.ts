import { Store } from "./Store";
export class Product extends Store {
  private _brand: string;
  private _price: number;

  constructor(
    id: number,
    name: string,
    type: number,
    quantity: number,
    brand: string,
    price: number
  ) {
    super(id, name, type, quantity);
    this._brand = brand;
    this._price = price;
  }

  public get brand(): string {
    return this._brand;
  }

  public get price(): number {
    return this._price;
  }

  public set brand(value: string) {
    this._brand = value;
  }

  public set price(value: number) {
    this._price = value;
  }

  public visualize() {
    super.visualize();
    console.log(`Marca do produto: ${this._brand}`);
    console.log(`Preço do produto: ${this._price}`);
  }
}
