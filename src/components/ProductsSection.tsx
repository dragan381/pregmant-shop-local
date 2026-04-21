import { useState, useEffect, useMemo } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductsSectionProps {
  selectedCategory: number | null;
}

type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";

const PRODUCTS_PER_PAGE = 8;

const ProductsSection = ({ selectedCategory }: ProductsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<number>(selectedCategory || categories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, minPrice, maxPrice, sortBy]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter((p) => p.categoryId === activeCategory);

    // Search filter
    if (searchQuery.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price filters
    if (minPrice) {
      result = result.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }

    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name, "sr");
        case "name-desc":
          return b.name.localeCompare(a.name, "sr");
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return result;
  }, [activeCategory, searchQuery, minPrice, maxPrice, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const activeCategoryName = categories.find((c) => c.id === activeCategory)?.name;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-12 md:py-16 bg-muted">
      <div className="container-boxed">
        <h2 className="section-title text-center">Proizvodi</h2>

        {/* Search, Filters & Sort */}
        <div className="bg-card rounded-lg p-4 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-muted-foreground" />
              <Select value={String(activeCategory)} onValueChange={(value) => setActiveCategory(Number(value))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Kategorija" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={String(category.id)}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Pretraži proizvode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Min Price */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Cena od:</span>
              <Input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Max Price */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Cena do:</span>
              <Input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sortiraj" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Ime (A-Ž)</SelectItem>
                  <SelectItem value="name-desc">Ime (Ž-A)</SelectItem>
                  <SelectItem value="price-asc">Cena (najniža)</SelectItem>
                  <SelectItem value="price-desc">Cena (najviša)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground mb-8">
          Prikazuje se: <span className="font-medium text-foreground">{activeCategoryName}</span>
          {" • "}
          <span className="font-medium text-foreground">{filteredAndSortedProducts.length}</span> proizvoda
          {totalPages > 1 && (
            <>
              {" • "}
              Strana <span className="font-medium text-foreground">{currentPage}</span> od <span className="font-medium text-foreground">{totalPages}</span>
            </>
          )}
        </p>
        
        {/* Products Grid */}
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    onClick={() => handlePageChange(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">Nema proizvoda koji odgovaraju kriterijumima pretrage.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setMinPrice("");
                setMaxPrice("");
              }}
              className="mt-4 text-accent hover:underline"
            >
              Resetuj filtere
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
