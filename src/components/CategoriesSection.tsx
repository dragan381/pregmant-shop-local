import { categories } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: number) => void;
}

const CategoriesSection = ({ onSelectCategory }: CategoriesSectionProps) => {
  return (
    <section id="categories" className="py-12 md:py-16 bg-muted">
      <div className="container-boxed">
        <h2 className="section-title text-center">Kategorije</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {categories.map((category) => (
              <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="category-card aspect-square group"
                  onClick={() => onSelectCategory(category.id)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg md:text-xl font-bold text-card">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-card hover:bg-accent hover:text-accent-foreground" />
          <CarouselNext className="hidden md:flex -right-4 bg-card hover:bg-accent hover:text-accent-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default CategoriesSection;
