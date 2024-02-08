import { createProductForm } from "../components/ProductForm";
import { refreshProducts } from "./refreshProducts";
import { getProductById } from "../services/ProductService";
import { Modal } from "../components/Modal";
import { Product } from "../types";

export async function openEditProductModal(
  productId: string,
  tableComponent: HTMLTableElement,
) {
  console.log("updateProductModal_log: Editar Produto clicado!", productId);
  const product: Product = await getProductById(productId); // busca os dados do produto na API
  const form = createProductForm(async () => {
    await refreshProducts(tableComponent);
    modal.close();
  }, product);
  const modal = Modal(form);
  modal.open();
}
