// Images are now in public/images folder

export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: number;
  isSpecial?: boolean;
}

export const categories: Category[] = [
  { id: 1, name: "Cement", image: "/images/category-cement.jpg", slug: "cement" },
  { id: 2, name: "Boje i fasade", image: "/images/category-paint.jpg", slug: "boje" },
  { id: 3, name: "Izolacija", image: "/images/category-insulation.jpg", slug: "izolacija" },
  { id: 4, name: "Alat", image: "/images/category-tools.jpg", slug: "alat" },
];

export const products: Product[] = [
  // Cement
  {
    id: 1,
    name: "Portland cement 25kg",
    description:
      "Visokokvalitetan portland cement za sve vrste građevinskih radova",
    price: 850,
    image: "/images/category-cement.jpg",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Beli cement 25kg",
    description: "Premium beli cement za dekorativne radove",
    price: 1200,
    image: "/images/category-cement.jpg",
    categoryId: 1,
    isSpecial: true,
  },
  {
    id: 3,
    name: "Cement za malterisanje 40kg",
    description: "Specijalizovani cement za malterisanje zidova",
    price: 950,
    image: "/images/category-cement.jpg",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Brzovezujući cement 25kg",
    description: "Cement sa brzim vremenom vezivanja",
    price: 1100,
    image: "/images/category-cement.jpg",
    categoryId: 1,
  },

  // Boje i fasade
  {
    id: 5,
    name: "Fasadna boja bela 15L",
    description: "Kvalitetna fasadna boja za spoljašnje zidove",
    price: 4500,
    image: "/images/category-paint.jpg",
    categoryId: 2,
    isSpecial: true,
  },
  {
    id: 6,
    name: "Unutrašnja boja 10L",
    description: "Periva unutrašnja boja za sve prostorije",
    price: 2800,
    image: "/images/category-paint.jpg",
    categoryId: 2,
  },
  {
    id: 7,
    name: "Temeljna boja 5L",
    description: "Osnovna boja za pripremu površina",
    price: 1800,
    image: "/images/category-paint.jpg",
    categoryId: 2,
  },
  {
    id: 8,
    name: "Lak za drvo 2.5L",
    description: "Zaštitni lak za drvene površine",
    price: 2200,
    image: "/images/category-paint.jpg",
    categoryId: 2,
  },

  // Izolacija
  {
    id: 9,
    name: "Stiropor 5cm 1m²",
    description: "Termoizolacione stiropor ploče",
    price: 350,
    image: "/images/category-insulation.jpg",
    categoryId: 3,
  },
  {
    id: 10,
    name: "Kamena vuna 10cm",
    description: "Zvučna i termička izolacija od kamene vune",
    price: 650,
    image: "/images/category-insulation.jpg",
    categoryId: 3,
    isSpecial: true,
  },
  {
    id: 11,
    name: "Hidroizolacija 10m²",
    description: "Bitumenska hidroizolaciona membrana",
    price: 3500,
    image: "/images/category-insulation.jpg",
    categoryId: 3,
  },
  {
    id: 12,
    name: "XPS ploče 8cm",
    description: "Ekstrudirana polistirenska izolacija",
    price: 550,
    image: "/images/category-insulation.jpg",
    categoryId: 3,
  },

  // Alat
  {
    id: 13,
    name: "Profesionalni čekić",
    description: "Čelični čekić sa drvenom drškom 500g",
    price: 1500,
    image: "/images/category-tools.jpg",
    categoryId: 4,
  },
  {
    id: 14,
    name: "Set odvijača 8kom",
    description: "Komplet odvijača raznih veličina",
    price: 2200,
    image: "/images/category-tools.jpg",
    categoryId: 4,
    isSpecial: true,
  },
  {
    id: 15,
    name: "Metar 5m",
    description: "Profesionalni metar sa blokadom",
    price: 800,
    image: "/images/category-tools.jpg",
    categoryId: 4,
  },
  {
    id: 16,
    name: "Libela 60cm",
    description: "Aluminijumska libela sa 3 nivoa",
    price: 1800,
    image: "/images/category-tools.jpg",
    categoryId: 4,
  },
];
