import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section id="testimonials" className="py-24 bg-[#F5F0EB] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4">Trusted by Thousands</h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-8 py-8">
            {testimonials.map((t) => (
              <div key={t.id} className="pl-4 md:pl-8 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0">
                <Card className="h-full border-none shadow-md bg-white rounded-2xl relative overflow-visible">
                  <div className="absolute -top-6 left-8 bg-primary text-white p-3 rounded-full shadow-lg">
                    <Quote size={20} />
                  </div>
                  <CardContent className="pt-12 pb-8 px-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < t.rating ? "fill-primary text-primary" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-foreground/80 italic leading-relaxed mb-6 flex-grow">
                      "{t.text}"
                    </p>
                    
                    <div className="mt-auto border-t border-gray-100 pt-4">
                      <h4 className="font-bold font-serif text-lg">{t.name}</h4>
                      <p className="text-xs text-primary font-bold uppercase tracking-wide">{t.treatment}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
