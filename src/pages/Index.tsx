import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import ProductsSection from "@/components/ProductsSection";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleNavigate = (section: string) => {
    if (section === "cart") {
      setIsCartOpen(true);
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setTimeout(() => {
      const element = document.getElementById("products");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar onNavigate={handleNavigate} />
        <HeroSection onNavigate={handleNavigate} />
        <AdBanner />
        <SpecialOffersSection />
        <CategoriesSection onSelectCategory={handleSelectCategory} />
        <ProductsSection selectedCategory={selectedCategory} />
        <AdBanner />
        <Footer />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
