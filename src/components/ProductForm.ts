import { createProduct, getAllProducts } from "../services/ProductService.ts";
import { updateTable } from "../utils/updateTable.ts";

export function creatProductForm(
  tableComponent: HTMLTableElement,
  closeModal: () => void,
) {
  const form = document.createElement("form");
  form.innerHTML = `
    <label for="productCod">Código:</label>
    <input type="text" id="productCod" name="productCod" required><br><br>
    <label for="productName">Nome:</label>
    <input type="text" id="productName" name="productName" required><br><br>
    <label for="productPrice">Preço:</label>
    <input type="text" id="productPrice" name="productPrice" required><br><br>
    <label for="productDescription">Descrição:</label>
    <textarea id="productDescription" name="productDescription" required></textarea><br><br>
    <button type="submit">Salvar Produto</button>
  `;

  form.onsubmit = async (event) => {
    event.preventDefault();
    const productData = {
      cod: form.querySelector("#productCod").value,
      name: form.querySelector("#productName").value,
      price: form.querySelector("#productPrice").value,
      description: form.querySelector("#productDescription").value,
    };
    try {
      await createProduct(productData);
      console.log("Produto cadastrado com sucesso", productData);

      closeModal();
      const products = await getAllProducts();
      updateTable(tableComponent, products);
    } catch (error) {
      console.log("Erro ao cadastrar produto", error);
    }
  };
  return form;
}
