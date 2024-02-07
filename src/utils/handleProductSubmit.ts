import { refreshProducts } from "./refreshProducts.ts";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../services/ProductService.ts";

let tableComponent: HTMLTableElement | null =
  document.querySelector("#tableComponentId");
export async function handleProductSubmit(
  productData: any,
  operationType: string,
) {
  try {
    switch (operationType) {
      case "create":
        if (typeof createProduct === "function") {
          await createProduct(productData);
          console.log(
            "HandleProductSubmit_log: Produto cadastrado com sucesso",
            productData,
          );
        } else {
          console.warn(
            "HandleProductSubmit_log: createProduct não implementado!",
          );
        }
        break;
      case "update":
        if (typeof updateProduct === "function") {
          await updateProduct(productData);
          console.log(
            "HandleProductSubmit_log: Produto atualizado com sucesso",
            productData,
          );
        } else {
          console.warn(
            "HandleProductSubmit_log: updateProduct não implementado!",
          );
        }
        break;
      case "delete":
        if (typeof deleteProduct === "function") {
          await deleteProduct(productData.id);
          console.log(
            "HandleProductSubmit_log: Produto deletado com sucesso",
            productData,
          );
        } else {
          console.warn(
            "HandleProductSubmit_log: deleteProduct não implementado!",
          );
        }
        break;
      default:
        console.error("handlePrdocutSubmit_Log:Operação não permitida");
    }
    if (tableComponent !== null) {
      await refreshProducts(tableComponent);
    }
  } catch (error) {
    console.log(`Erro ao ${operationType} produto`, error);
  }
}
