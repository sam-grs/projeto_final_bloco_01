export abstract class Store {
  private _id: number;
  private _name: string;
  private _quantity: number;

  constructor(id: number, name: string, type: number, quantity: number) {
    this._id = id;
    this._name = name;
    this._quantity = quantity;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set quantity(value: number) {
    this._quantity = value;
  }

  public visualize(): void {
    console.log("****************************************");
    console.log("Produto");
    console.log("****************************************");
    console.log(`Número do produto: ${this._id}`);
    console.log(`Nome: ${this.name}`);
    console.log(`Quantidade: ${this._quantity}`);
  }
}
