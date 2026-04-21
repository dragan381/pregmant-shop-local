interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="relative h-[500px] md:h-[600px] overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/hero-construction.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-concrete-900/90 via-concrete-800/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-boxed relative h-full flex items-center">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6">
            Sve za gradnju na jednom mestu
          </h1>
          <p className="text-lg md:text-xl text-concrete-300 mb-8">
            Kvalitetni građevinski materijali i alat za profesionalne izvođače i
            majstore.
          </p>
          <button
            onClick={() => onNavigate("products")}
            className="btn-accent text-lg"
          >
            Saznaj više
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
