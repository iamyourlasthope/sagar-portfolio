import { ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MerchSection = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isImageVisible) {
          setIsImageVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => observer.disconnect();
  }, [isImageVisible]);

  return (
    <section id="merch" className="section-merch py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative z-0">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-2 sm:px-0">
            <span className="text-gradient">Merch</span>
          </h2>
        </div>

        {/* Responsive container: full width on mobile, max-w-4xl on desktop */}
        <div className="w-full max-w-4xl mx-auto px-0">
          <div className="modern-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 w-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Content - Right Side (order-1 on mobile, order-2 on desktop) */}
              <div className="flex-1 flex flex-col items-center lg:items-start space-y-6 order-1 lg:order-2">
                <div className="w-20 h-20 sm:w-20 sm:h-20 bg-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 sm:w-10 sm:h-10 text-accent" />
                </div>
                <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                  <h3 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    Coming Soon
                  </h3>
                  <p className="text-lg sm:text-lg lg:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
                    We're working on something special. Exclusive merchandise coming soon - stay tuned for amazing products!
                  </p>
                </div>
              </div>
              {/* Animated Image - Left Side (order-2 on mobile, order-1 on desktop) */}
              <div
                ref={imageRef}
                className={`flex-shrink-0 mb-6 lg:mb-0 transition-all duration-700 ease-out order-2 lg:order-1 ${
                  isImageVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <div className="relative">
                  <img
                    src="https://i.postimg.cc/vHFpn6MY/pankhaj-bhaiya.png"
                    alt="Exclusive Merch Preview"
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-contain animate-float rounded-2xl shadow-xl"
                    loading="lazy"
                  />
                  {/* Floating dots */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent/70 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-3.5 h-3.5 bg-[hsl(var(--electric-blue))] rounded-full animate-pulse delay-1000 shadow-lg"></div>
                  <div className="absolute top-1/2 -left-3 w-2.5 h-2.5 bg-accent/50 rounded-full animate-pulse delay-500 shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchSection; 