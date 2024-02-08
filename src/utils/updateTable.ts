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
                     </tr>`,
      )
      .join("");
  }
};
