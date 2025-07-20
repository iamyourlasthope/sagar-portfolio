import { ShoppingBag } from "lucide-react";

const MerchSection = () => {
  return (
    <section id="merch" className="section-merch py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-2 sm:px-0">
            <span className="text-gradient">Merch</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-0">
          <div className="modern-card rounded-xl sm:rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
            <div className="flex flex-col items-center space-y-6 sm:space-y-8">
              <div className="w-20 h-20 sm:w-20 sm:h-20 bg-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 sm:w-10 sm:h-10 text-accent" />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Coming Soon
                </h3>
                <p className="text-lg sm:text-lg lg:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
                  We're working on something special. Exclusive merchandise coming soon - stay tuned for amazing products!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchSection; 