import "./style/style.css";
import { Table } from "./components/Table.ts";
import { Button } from "./components/Buttons.ts";
import { Modal } from "./components/Modal.ts";
import { createProductForm } from "./components/ProductForm.ts";
import { refreshProducts } from "./utils/refreshProducts.ts";
import { handleProductSubmit } from "./utils/handleProductSubmit.ts";
import { Product } from "./types";

const app = document.querySelector<HTMLDivElement>("#app");

const init = async () => {
  if (app) {
    const tableComponent = Table();

    const newProdButton = Button("Novo Produto", () => {
      const form = createProductForm(
        () => {
          const modal = Modal(form);
          modal.open();
          console.log("newProdButton_log: Novo Produto clicado!");
        },
        (productData: Product) => handleProductSubmit(productData, "create"),
      );
    });
    const updateProdButton = Button("Atualizar Produto", () =>
      console.log("updateProdButton_log: Atualizar Produto clicado!"),
    );

    app.innerHTML = "";
    app.append(newProdButton, updateProdButton, tableComponent);

    try {
      await refreshProducts(tableComponent);
      // const products = await getAllProducts();
      // updateTable(tableComponent, products);
    } catch (error) {
      console.error(error);
    }
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM fully loaded and parsed");
  await init();
});
