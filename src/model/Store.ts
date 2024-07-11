abstract class Store {
  private _id: number;
  private _name: string;
  private _type: number;
  private _quantity: number;

  constructor(id: number, name: string, type: number, quantity: number) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._quantity = quantity;
  }

  // talvez apague
  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get type(): number {
    return this._type;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set type(value: number) {
    this._type = value;
  }

  public set quantity(value: number) {
    this._quantity = value;
  }

  public visualize(): void {
    // let type: string = "";

    // if (this.type == 1) type = "Conta Corrente";
    // else type = "Conta Poupança";

    console.log("****************************************");
    console.log("Loja");
    console.log("****************************************");
    console.log(`Número do produto: ${this._id}`);
    console.log(`Nome: ${this.name}`);
    console.log(`Tipo: ${this._type}`);
    console.log(`Quantidade: ${this._quantity}`);
  }
}
