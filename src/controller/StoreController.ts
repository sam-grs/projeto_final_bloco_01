class StoreController implements StoryRepository {
  private productList: Array<Store> = new Array<Store>();
  public id: number = 0;

  register(product: Store): void {
    this.productList.push(product);
    console.log("\n Produto criado!");
  }

  listAll(): void {
    for (let product of this.productList) {
      product.visualize();
    }
  }

  search(id: number): void {
    let searchProduct = this.searchList(id);
    if (searchProduct !== null) {
      searchProduct.visualize();
    } else {
      console.log("\n Produto não encontrado");
    }
  }

  update(product: Store): void {
    let searchAccount = this.searchList(product.id);
    if (searchAccount !== null) {
      this.productList[this.productList.indexOf(searchAccount)] = product;
      console.log("\n Conta atualizada!");
    } else {
      console.log("\n Conta não encontrada");
    }
  }

  delete(id: number): void {
    let searchProduct = this.searchList(id);
    if (searchProduct !== null) {
      this.productList.splice(this.productList.indexOf(searchProduct), 1);
      console.log("\n Produto deletado!");
    } else {
      console.log("\n Produto não encontrado");
    }
  }

  public generateNumber(): number {
    return ++this.id;
  }

  public searchList(id: number): Store | null {
    return this.productList.find((product) => product.id === id) || null;
  }
}
