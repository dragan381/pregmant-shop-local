"use client";

import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity
    );
    toast({
      title: "Dodato u korpu",
      description: `${product.name} (${quantity} kom)`,
    });
    setQuantity(1);
  };

  return (
    <div className="product-card flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isSpecial && (
          <span className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded font-medium">
            Akcija
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-foreground mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-accent mb-2">
          {product.price.toLocaleString("sr-RS")} RSD
        </p>

        {showDetails && (
          <p className="text-sm text-muted-foreground mb-3 animate-fade-in">
            {product.description}
          </p>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-accent hover:underline mb-3 text-left"
        >
          {showDetails ? "Sakrij detalje" : "Pogledaj više"}
        </button>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-center gap-3 bg-muted rounded-md p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-secondary rounded transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-secondary rounded transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            <ShoppingCart className="w-4 h-4" />
            Dodaj u korpu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
