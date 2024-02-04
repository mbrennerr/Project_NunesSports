import { Product } from "../types";
import { API_URL } from "../api/apiProduct.ts";

export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await API_URL.get<Product[]>("/product");
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      throw new Error("Erro na requisição da API");
    }
  } catch (error) {
    console.error("Erro ao carregar produtos");
    throw error;
  }
}
