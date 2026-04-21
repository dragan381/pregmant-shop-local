"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SpecialOffersSection = () => {
  const specialProducts = products.filter((p) => p.isSpecial);

  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container-boxed">
        <h2 className="section-title text-center">Posebne ponude</h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {specialProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-card hover:bg-accent hover:text-accent-foreground border-border" />
          <CarouselNext className="hidden md:flex -right-4 bg-card hover:bg-accent hover:text-accent-foreground border-border" />
        </Carousel>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
