import "./style/style.css";
import { Table } from "./components/Table.ts";
import { getAllProducts } from "./services/ProductService.ts";
import { Button } from "./components/Buttons.ts";
import { updateTable } from "./utils/updateTable.ts";

const app = document.querySelector<HTMLDivElement>("#app");

const init = async () => {
  if (app) {
    const createButtonComponent = Button(() => console.log("Create"));
    const tableComponent = Table();

    app.innerHTML = "";
    app.append(createButtonComponent, tableComponent);

    try {
      const products = await getAllProducts();
      updateTable(tableComponent, products);
    } catch (error) {
      console.error(error);
    }
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM fully loaded and parsed");
  await init();
});
