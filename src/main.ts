import "./style/style.css";
import { Table } from "./components/Table.ts";
import { Button } from "./components/Buttons.ts";
import { getAllProducts } from "./utils/getAllProducts.ts";

const app = document.querySelector<HTMLDivElement>("#app");
if (app) {
  const tableComponent = Table();
  const buttonComponent = Button(() => console.log("Button clicked"));

  buttonComponent.addEventListener("click", () => {
    getAllProducts()
      .then((products) => {
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
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos", error);
      });
  });
  app.innerHTML = "";
  app.appendChild(buttonComponent);
  app.appendChild(tableComponent);
}
