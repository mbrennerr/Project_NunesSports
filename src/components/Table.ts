export function Table() {
  const table = document.createElement("table");
  const tbody = table.createTBody();
  tbody.id = "productTableBody";

  table.innerHTML = `
    <thead>
        <tr>
            <th>cod</th>
            <th>name</th>
            <th>price</th>
            <th>description</th>
        </tr>
        </thead>
        <tbody id="productTableBody"></tbody>   
    `;
  return table;
}
