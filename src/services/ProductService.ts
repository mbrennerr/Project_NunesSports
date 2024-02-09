import { Product } from "../types";
import { API_URL } from "../api/apiProduct";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await API_URL.get<Product[]>("/products");
  if (response.status === 200 && response.data) {
    // console.log(response.data, "Console_Service_getAllProducts");
    return response.data;
  } else {
    throw new Error("Erro na requisição da API");
  }
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await API_URL.get<Product>(`/products/${id}`);
  if (response.status === 200 && response.data) {
    console.log(
      "Console_Service_getProductById: Resposta da API",
      response.data,
    );
    return response.data;
  } else {
    throw new Error("Erro na requisição da API");
  }
};
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

export const updateProduct = async (product: Product) => {
  try {
    const response = await API_URL.patch<Product>(
      `/products/${product.id}`,
      product,
    );
    if (response.status === 200) {
      console.log("UpdateProduct_Log: Resposta da API", response.data);
      return response.data;
    } else {
      console.error(
        "MetodoUpdate_Else_Log:Resposta de Erro da API",
        response.data,
      );
    }
  } catch (error) {
    console.error("MetodoUpdate_Catch_Log:Erro na requisição da API", error);
    throw error;
  }
};

export const deleteProduct = async (id: string) => {
  const response = await API_URL.delete<Product>(`/products/${id}`);
  if (response.status === 200) {
    console.log("DeleteProduct_Log: Resposta da API", response.data);
    return response.data;
  } else {
    console.error(
      "MetodoDelete_Else_Log:Resposta de Erro da API",
      response.data,
    );
  }
};

export const ProductService = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
