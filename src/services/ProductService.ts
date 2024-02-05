import { Product } from "../types";
import { API_URL } from "../api/apiProduct";

//const createProduct = async (product: Product) => {};

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await API_URL.get<Product[]>("/products");
  if (response.status === 200 && response.data) {
    console.log(response.data, "console da função getAllProducts no Service");
    return response.data;
  } else {
    throw new Error("Erro na requisição da API");
  }
};

//const updateProduct = async (product: Product) => {};

//const deleteProduct = async (id: string) => {};

export const ProductService = {
  //createProduct,
  getAllProducts,
  //updateProduct,
  //deleteProduct,
};
