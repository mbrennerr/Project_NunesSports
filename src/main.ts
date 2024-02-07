import "./style/style.css";
import { Table } from "./components/Table.ts";
import { Button } from "./components/Buttons.ts";
import { Modal } from "./components/Modal.ts";
import { refreshProducts } from "./utils/refreshProducts.ts";
import { handleProductSubmit } from "./utils/handleProductSubmit.ts";
import { createProductForm } from "./components/ProductForm.ts";

const app = document.querySelector<HTMLDivElement>("#app");

const init = async () => {
  if (app) {
    const tableComponent = Table();

    const newProdButton = Button("Novo Produto", () => {
      console.log("newProdButton_log: Novo Produto clicado!");
      const onSubmit = async () => {
        const productData: {} = {};
        await handleProductSubmit(productData, "create");
        await refreshProducts(tableComponent);
        modal.close();
      };
      const form = createProductForm(onSubmit, () => {});
      const modal = Modal(form);
      modal.open();
    });

    const updateProdButton = Button("Atualizar Produto", () =>
      console.log("updateProdButton_log: Atualizar Produto clicado!"),
    );

    app.innerHTML = "";
    app.append(newProdButton, updateProdButton, tableComponent);

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
