import * as readlineSync from "readline-sync";
import { colors } from "./src/utils";
import { StoreController, Product } from "./src";

function menuInformation() {
  console.log(colors.fg.magentastrong);
  console.log("****************************************");
  console.log("\t Loja de Periféricos");
  console.log("****************************************");
  console.log("1 - Cadastrar produto");
  console.log("2 - Listar todos os produtos");
  console.log("3 - Buscar produto");
  console.log("4 - Atualizar produto ");
  console.log("5 - Apagar produto ");
  console.log("6 - Sair");
  console.log("****************************************");
  console.log(colors.reset);
}

export function main() {
  // const?
  let option, id, type, quantity, price: number; // mudar o type
  let name, brand: string;
  const store: StoreController = new StoreController();

  store.register(
    new Product(store.generateNumber(), "teclado", 1, 1, "BW-kb1", 300)
  );

  while (true) {
    menuInformation();
    option = readlineSync.questionInt("Entre com a opcao desejada: ", {
      limitMessage: "Invalido, insira um numero",
    });
    if (option == 6) {
      console.log("Volte sempre!");
      aboutMe();
      process.exit(0);
    }
    if (option == 1) {
      console.log(
        colors.fg.cyan,
        "\n\n Cadastradar produto \n\n",
        colors.reset
      );
      console.log("Digite o nome do produto: ");
      name = readlineSync.question("");
      console.log("Digite a quantidade do produto: ");
      quantity = readlineSync.questionInt("");
      console.log("Digite a marca do produto: ");
      brand = readlineSync.question("");
      console.log("Digite o preço do produto: ");
      price = readlineSync.questionInt("");

      store.register(
        new Product(store.generateNumber(), name, 1, quantity, brand, price)
      );

      keyPress();
    }

    if (option == 2) {
      console.log(colors.fg.cyan, "\n\n Listar todos \n\n", colors.reset);
      store.listAll();
      keyPress();
    }

    if (option == 3) {
      console.log(colors.fg.cyan, "\n\n Consultar produto  \n\n", colors.reset);

      console.log("Digite o número do produto: ");
      id = readlineSync.questionInt("");
      store.search(id);
      keyPress();
    }

    if (option == 4) {
      console.log(colors.fg.cyan, "\n\n Atualizar produto  \n\n", colors.reset);

      console.log("Digite o número do produto: ");
      id = readlineSync.questionInt("");
      console.log("Digite o nome do produto: ");
      name = readlineSync.question("");
      console.log("Digite a quantidade do produto: ");
      quantity = readlineSync.questionInt("");
      console.log("Digite a marca do produto: ");
      brand = readlineSync.question("");
      console.log("Digite o preço do produto: ");
      price = readlineSync.questionInt("");

      store.update(new Product(id, name, 1, quantity, brand, price));
      keyPress();
    }

    if (option == 5) {
      console.log("\n\n Deletar produto \n\n");
      console.log("Digite o número do produto: ");
      id = readlineSync.questionInt("");
      store.delete(id);
      keyPress();
    }
  }
}

export function aboutMe() {
  console.log("*****************************************************");
  console.log("Projeto Desenvolvido por: Samira Grossi de Oliveira");
  console.log("Generation Brasil - sam_trab.gro@outlook.com");
  console.log("https://github.com/sam-grs/bank-account");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlineSync.prompt();
}

main();
