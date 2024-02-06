import { getAllProducts } from "../services/ProductService.ts";
import { updateTable } from "../utils/updateTable.ts";

export const refreshProducts = async (tableComponent: HTMLTableElement) => {
  try {
    const products = await getAllProducts();
    updateTable(tableComponent, products);
  } catch (error) {
    console.error("refreshProduct_log: erro ao carregar produtos", error);
  }
};
