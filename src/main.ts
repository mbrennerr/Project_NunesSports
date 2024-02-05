import "./style/style.css";
import { Table } from "./components/Table.ts";
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
const init = async () => {
  if (app) {
    const tableComponent = Table();
    //vou reutilizar essa função para criar um botão que cria um produto!
    // const buttonComponent = Button(() => {
    //   getAllProducts()
    //       .then((products) => updateTable(tableComponent, products))
    //       .catch((error) => console.error(error));
    // });
    app.innerHTML = "";
    app.append(tableComponent);

    try {
      const products = await getAllProducts();
      updateTable(tableComponent, products);
    } catch (error) {
      console.error(error);
    }
  }
};

init();
