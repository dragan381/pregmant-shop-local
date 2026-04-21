import { useQuery } from "@tanstack/react-query";
import { 
  fetchCategories, 
  fetchProducts, 
  fetchSpecialProducts,
  fetchProductById 
} from "@/services/productService";

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};

export const useProducts = (categoryId?: number) => {
  return useQuery({
    queryKey: ['products', categoryId],
    queryFn: () => fetchProducts(categoryId),
  });
};

export const useSpecialProducts = () => {
  return useQuery({
    queryKey: ['products', 'special'],
    queryFn: fetchSpecialProducts,
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};
