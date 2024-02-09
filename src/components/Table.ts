export function Table() {
  const table = document.createElement("table");
  const tbody = table.createTBody();
  tbody.id = "productTableBody";

  table.innerHTML = `
    <thead>
        <tr>
            <th>código</th>
            <th>Nome</th>
            <th>Preço R$</th>
            <th>Descrição</th>
            <th>Ações</th>
        </tr>
        </thead>
        <tbody id="productTableBody"></tbody>   
    `;
  return table;
}
