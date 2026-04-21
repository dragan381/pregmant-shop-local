import { categories, products, Category, Product } from "@/data/products";

// ============================================================
// SUPABASE INTEGRATION - UNCOMMENT WHEN DATABASE IS READY
// ============================================================

// import { supabase } from "@/integrations/supabase/client";

// export const fetchCategories = async (): Promise<Category[]> => {
//   const { data, error } = await supabase
//     .from('categories')
//     .select('*')
//     .order('name');
//
//   if (error) {
//     console.error('Error fetching categories:', error);
//     throw error;
//   }
//
//   return data || [];
// };

// export const fetchProducts = async (categoryId?: number): Promise<Product[]> => {
//   let query = supabase
//     .from('products')
//     .select('*')
//     .order('name');
//
//   if (categoryId) {
//     query = query.eq('category_id', categoryId);
//   }
//
//   const { data, error } = await query;
//
//   if (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
//
//   return data || [];
// };

// export const fetchSpecialProducts = async (): Promise<Product[]> => {
//   const { data, error } = await supabase
//     .from('products')
//     .select('*')
//     .eq('is_special', true)
//     .order('name');
//
//   if (error) {
//     console.error('Error fetching special products:', error);
//     throw error;
//   }
//
//   return data || [];
// };

// export const fetchProductById = async (id: number): Promise<Product | null> => {
//   const { data, error } = await supabase
//     .from('products')
//     .select('*')
//     .eq('id', id)
//     .maybeSingle();
//
//   if (error) {
//     console.error('Error fetching product:', error);
//     throw error;
//   }
//
//   return data;
// };

// ============================================================
// STATIC DATA FUNCTIONS - REPLACE WITH SUPABASE CALLS ABOVE
// ============================================================

export const fetchCategories = async (): Promise<Category[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return categories;
};

export const fetchProducts = async (
  categoryId?: number
): Promise<Product[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (categoryId) {
    return products.filter((p) => p.categoryId === categoryId);
  }
  return products;
};

export const fetchSpecialProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return products.filter((p) => p.isSpecial);
};

export const fetchProductById = async (id: number): Promise<Product | null> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return products.find((p) => p.id === id) || null;
};

// ============================================================
// SQL SCHEMA FOR FUTURE DATABASE SETUP
// ============================================================

/*
-- Categories table
CREATE TABLE public.categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products table
CREATE TABLE public.products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  image TEXT,
  category_id INTEGER REFERENCES public.categories(id),
  is_special BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read categories" ON public.categories
  FOR SELECT USING (true);

CREATE POLICY "Allow public read products" ON public.products
  FOR SELECT USING (true);
*/
