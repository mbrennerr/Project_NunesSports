import { handleProductSubmit } from "../utils/handleProductSubmit.ts";
import { Product } from "../types";

export function createProductForm(
  onSuccess: () => Promise<void>,
  product?: Product,
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
  // Se o produto existir, preenche os campos do formulário sem isso quando clicar em editar o formulário vem vazio...
  // horrivel bati cabeça com isso =D
  if (product) {
    (form.querySelector("#productCod") as HTMLInputElement).value = product.cod;
    (form.querySelector("#productName") as HTMLInputElement).value =
      product.name;
    (form.querySelector("#productPrice") as HTMLInputElement).value =
      product.price;
    (form.querySelector("#productDescription") as HTMLInputElement).value =
      product.description;
  }
  // Adiciona um evento de submit ao formulário
  form.onsubmit = async (event) => {
    event.preventDefault();
    const productCodElement = form.querySelector("#productCod");
    const productNameElement = form.querySelector("#productName");
    const productPriceElement = form.querySelector("#productPrice");
    const productDescriptionElement = form.querySelector("#productDescription");

    if (
      productCodElement &&
      productNameElement &&
      productPriceElement &&
      productDescriptionElement
    ) {
      const productData = {
        ...product,
        cod: (productCodElement as HTMLInputElement).value,
        name: (productNameElement as HTMLInputElement).value,
        price: (productPriceElement as HTMLInputElement).value,
        description: (productDescriptionElement as HTMLInputElement).value,
      };
      try {
        await handleProductSubmit(productData, product ? "update" : "create");
        console.log(
          "ProductForm_Log: Produto cadastrado com sucesso",
          productData,
        );
        await onSuccess();
      } catch (error) {
        console.log("ProdutForm_Catch_Log: Erro ao cadastrar produto", error);
      }
    }
  };
  return form;
}
