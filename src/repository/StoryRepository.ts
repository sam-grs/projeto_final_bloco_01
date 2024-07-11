import { Product } from "../model";

export interface StoryRepository {
  listAll(): void; //Listar todos os Produtos
  search(id: number): void; //Listar Produto pelo ID
  register(product: Product): void; //Cadastrar Produto
  update(product: Product): void; //Atualizar Produto
  delete(num: number): void; //Deletar Produto
}
