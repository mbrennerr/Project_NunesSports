import { Product } from "../types";
import { API_URL } from "../api/apiProduct.ts";

export async function getAllProducts(): Promise<Product[]> {
  const response = await API_URL.get<Product[]>("/products");
  if (response.status === 200 && response.data) {
    console.log(response.data, "console da função getAllProducts");
    return response.data;
  } else {
    throw new Error("Erro na requisição da API");
  }
}
