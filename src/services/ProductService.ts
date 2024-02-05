import { Product } from "../types";
import { API_URL } from "../api/apiProduct";

export const createProduct = async (product: Product) => {
  const response = await API_URL.post<Product>("/products", product);
  if (response.status === 201 && response.data) {
    return response.data;
  } else {
    throw new Error("Erro na requisição da API");
  }
};

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await API_URL.get<Product[]>("/products");
  if (response.status === 200 && response.data) {
    console.log(response.data, "Console_Service_getAllProducts");
    return response.data;
  } else {
    throw new Error("Erro na requisição da API");
  }
};

//const updateProduct = async (product: Product) => {};

//const deleteProduct = async (id: string) => {};

export const ProductService = {
  createProduct,
  getAllProducts,
  //updateProduct,
  //deleteProduct,
};
