interface AdBannerProps {
  variant?: "horizontal" | "sidebar";
}

const AdBanner = ({ variant = "horizontal" }: AdBannerProps) => {
  if (variant === "sidebar") {
    return (
      <div className="bg-concrete-200 border border-border rounded-lg p-4 text-center">
        <p className="text-muted-foreground text-sm mb-2">Reklamni prostor</p>
        <div className="aspect-[1/2] bg-concrete-300 rounded flex items-center justify-center">
          <span className="text-muted-foreground text-xs">300x600</span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 bg-card">
      <div className="container-boxed">
        <div className="bg-concrete-200 border border-border rounded-lg p-4 text-center">
          <p className="text-muted-foreground text-sm mb-2">Reklamni prostor</p>
          <div className="h-24 md:h-32 bg-concrete-300 rounded flex items-center justify-center">
            <span className="text-muted-foreground text-sm">728x90 / 970x90</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
