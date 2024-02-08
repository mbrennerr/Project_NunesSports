import "./style/style.css";
import { Table } from "./components/Table.ts";
import { Button } from "./components/Buttons.ts";
import { Modal } from "./components/Modal.ts";
import { refreshProducts } from "./utils/refreshProducts.ts";
import { createProductForm } from "./components/ProductForm.ts";

const app = document.querySelector<HTMLDivElement>("#app");

const init = async () => {
  if (app) {
    const tableComponent = Table();

    const newProdButton = Button("Novo Produto", () => {
      console.log("newProdButton_log: Novo Produto clicado!");
      const form = createProductForm(async () => {
        await refreshProducts(tableComponent);
        modal.close();
      });
      const modal = Modal(form);
      modal.open();
    });

    app.innerHTML = "";
    app.append(newProdButton, tableComponent);

    try {
      await refreshProducts(tableComponent);
    } catch (error) {
      console.error(error);
    }
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM fully loaded and parsed");
  await init();
});
