import { openEditProductModal } from "./modalUtils.ts";
import { handleProductSubmit } from "./handleProductSubmit.ts";
import { refreshProducts } from "./refreshProducts.ts";

export const updateTable = (
  tableComponent: HTMLTableElement,
  products: any[],
) => {
  const tbody = tableComponent.querySelector("tbody");
  if (tbody) {
    console.log("updateTable_Log: Atualizando tabela de produtos...", products);
    tbody.innerHTML = products
      .map(
        (product) => `
                     <tr data-id="${product.id}">
                            <td>${product.cod}</td>
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                            <td>${product.description}</td>
                            <td><button class="edit-product-btn" data-id="${product.id}">Editar</button></td>
                            <td><button class="delete-product-btn" data-id="${product.id}">Excluir</button></td>
                     </tr>`,
      )
      .join("");

    //Listerner para os botões de edição;
    tbody.querySelectorAll(".edit-product-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        console.log("edit-product-btn_Log: Editar Produto clicado!", event);
        const productId = button.getAttribute("data-id")!;
        openEditProductModal(productId, tableComponent); //essa função ainda não existe, vai ser definida no main.ts
        event.stopPropagation();
      });
    });

    //Listerner para os botões de exclusão;
    tbody.querySelectorAll(".delete-product-btn").forEach((button) => {
      button.addEventListener("click", async (event) => {
        const productId = button.getAttribute("data-id")!;
        if (productId) {
          await handleProductSubmit({ id: productId }, "delete");
          await refreshProducts(tableComponent);
        }
        event.stopPropagation();
      });
    });
  }
};
