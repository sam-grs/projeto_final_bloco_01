import * as readlineSync from "readline-sync";
import { colors } from "src/utils";

function menuInformation() {
  console.log(colors.fg.magentastrong);
  console.log("****************************************");
  console.log("\t Loja de periféricos");
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
  // depois ver qual é const ou nao
  let option, id, type, quantity, price: number;
  let name, brand: string;
  // const store: StoreController = new StoreController();

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
      keyPress();
    }

    if (option == 2) {
      console.log(colors.fg.cyan, "\n\n Listar todos \n\n", colors.reset);
      keyPress();
    }

    if (option == 3) {
      console.log(colors.fg.cyan, "\n\n Consultar produto  \n\n", colors.reset);
      keyPress();
    }

    if (option == 4) {
      console.log(colors.fg.cyan, "\n\n Atualizar produto  \n\n", colors.reset);
      keyPress();
    }

    if (option == 5) {
      console.log("\n\n Deletar produto \n\n");
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
