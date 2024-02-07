import { Product } from "../types";
import { API_URL } from "../api/apiProduct";

export const createProduct = async (product: Product) => {
  try {
    const response = await API_URL.post<Product>("/products", product);
    if (response.status === 200) {
      console.log("CreateProduct_Log: Resposta da API", response.data);
      return response.data;
    } else {
      console.error(
        "MetodoCreate_Else_Log:Resposta de Erro da API",
        response.data,
      );
    }
  } catch (error) {
    console.error("MetodoCreate_Log:Erro na requisição da API", error);
    throw error;
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

export const updateProduct = async (product: Product) => {
  console.log(product, "Console_Service_updateProduct");
};

export const deleteProduct = async (id: string) => {
  console.log(id, "Console_Service_deleteProduct");
};

export const ProductService = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
