import "./style/style.css";
import { Table } from "./components/Table.ts";
import { Button } from "./components/Buttons.ts";
//import { getAllProducts } from "./utils/getAllProducts.ts";
import { getAllProducts } from "./services/ProductService.ts";

const app = document.querySelector<HTMLDivElement>("#app");
const updateTable = (tableComponent: HTMLTableElement, products: any[]) => {
  const tbody = tableComponent.querySelector("tbody");
  if (tbody) {
    tbody.innerHTML = products
      .map(
        (product) => `
                     <tr>
                            <td>${product.cod}</td>
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                            <td>${product.description}</td>
                     </tr>`,
      )
      .join("");
  }
};
if (app) {
  const tableComponent = Table();
  const buttonComponent = Button(() => {
    getAllProducts()
      .then((products) => updateTable(tableComponent, products))
      .catch((error) => console.error(error));
  });
  app.innerHTML = "";
  app.append(buttonComponent, tableComponent);
}
