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
