import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import psoriasisAfter from "@assets/wmremove-transformed_1771706643834.jpeg";
import acneManagement1 from "@assets/treatments/Acne Management.jpeg";
import acneManagement2 from "@assets/treatments/Acne Management2.jpeg";
import botox1 from "@assets/treatments/botox.jpeg";
import botox2 from "@assets/treatments/botox2.jpeg";
import botox3 from "@assets/treatments/botox3.jpeg";
import clinicalDermatology1 from "@assets/treatments/Clinical Dermatology.jpeg";
import clinicalDermatology2 from "@assets/treatments/Clinical Dermatology2.jpeg";
import clinicalDermatology3 from "@assets/treatments/Clinical Dermatology3.jpeg";
import dermatosurgery from "@assets/treatments/dermatosurgery.jpeg";
import exosomeHair from "@assets/treatments/Exosome treatment of hair.jpeg";
import exosomeScars from "@assets/treatments/Exosome treatment of scars.jpeg";
import laserPigmentation1 from "@assets/treatments/Laser for pigmentation.jpeg";
import laserPigmentation2 from "@assets/treatments/Laser for pigmentation2.jpeg";
import skinTagRemoval from "@assets/treatments/Removal of DPN, warts, tags, moles.jpeg";
import skinTagRemovalAlt from "@assets/treatments/Skin tag removal.jpeg";
import xanthelasmaManagement from "@assets/treatments/Xanthelasma management.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const treatmentResults = [
  { image: acneManagement1, title: "Acne Management", description: "Advanced acne treatment with visible results" },
  { image: acneManagement2, title: "Acne Management", description: "Comprehensive acne care program" },
  { image: botox1, title: "Botox Treatment", description: "Smooth wrinkles and fine lines naturally" },
  { image: botox2, title: "Botox Treatment", description: "Professional botox application" },
  { image: botox3, title: "Botox Treatment", description: "Rejuvenated appearance with botox" },
  { image: clinicalDermatology1, title: "Clinical Dermatology", description: "Expert clinical skin assessment" },
  { image: clinicalDermatology2, title: "Clinical Dermatology", description: "Advanced dermatological care" },
  { image: clinicalDermatology3, title: "Clinical Dermatology", description: "Specialized skin treatment" },
  { image: dermatosurgery, title: "Dermatosurgery", description: "Precise surgical skin procedures" },
  { image: exosomeHair, title: "Exosome Hair Treatment", description: "Hair restoration with exosome therapy" },
  { image: exosomeScars, title: "Exosome Scar Treatment", description: "Scar reduction using exosome technology" },
  { image: laserPigmentation1, title: "Laser Pigmentation", description: "Even skin tone with laser therapy" },
  { image: laserPigmentation2, title: "Laser Pigmentation", description: "Pigmentation correction treatment" },
  { image: skinTagRemoval, title: "Skin Tag & Mole Removal", description: "Safe removal of skin growths" },
  { image: skinTagRemovalAlt, title: "Skin Tag Removal", description: "Professional skin tag treatment" },
  { image: xanthelasmaManagement, title: "Xanthelasma Management", description: "Specialized xanthelasma care" },
];

function CarouselSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const itemsToShow = 5;
  const totalItems = treatmentResults.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  // Auto-play carousel
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [isHovering]);

  const getItemIndex = (offset: number) => (currentIndex + offset + totalItems) % totalItems;

  return (
    <div className="relative w-full" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="flex items-center justify-center gap-3 px-12 py-8">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-3 rounded-full z-20 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Carousel Items */}
        <div className="flex items-end justify-center gap-4 w-full h-96">
          {[...Array(itemsToShow)].map((_, i) => {
            const offset = i - Math.floor(itemsToShow / 2);
            const idx = getItemIndex(offset);
            const item = treatmentResults[idx];
            const isCenter = offset === 0;

            return (
              <motion.div
                key={i}
                initial={{ scale: 1 }}
                animate={{ scale: isCenter ? 1.2 : 0.95, zIndex: isCenter ? 10 : 5 - Math.abs(offset) }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0 relative cursor-pointer group"
              >
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                    isCenter
                      ? "h-96 w-72 shadow-2xl border-4 border-primary"
                      : "h-72 w-56 opacity-70 hover:opacity-90"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>

                {/* Label - Only show for center item */}
                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white rounded-b-2xl"
                  >
                    <h4 className="font-serif text-xl font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-3 rounded-full z-20 transition-all duration-300 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {treatmentResults.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? "bg-primary w-8 h-3"
                : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Real Results</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Transformations That Speak</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Witness the power of scientific skincare. Our treatments are designed to deliver visible, long-lasting improvements for various skin concerns.
            </p>
            
            <div className="bg-[#F5F0EB] p-6 rounded-xl border-l-4 border-primary">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-bold">Disclaimer</p>
              <p className="text-sm italic text-foreground/80">
                Results may vary from person to person. Images are for illustrative purposes and represent typical outcomes of successful treatments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <div className="relative h-[400px] w-full bg-gray-100">
              <img 
                src={psoriasisAfter} 
                alt="Treatment Results"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4 bg-white text-center border-t">
              <p className="font-serif font-bold text-lg">Palmoplantar Psoriasis</p>
              <p className="text-sm text-muted-foreground">Significant improvement after targeted medical therapy</p>
            </div>
          </motion.div>

        </div>

        {/* Treatment Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Treatment Portfolio</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of treatments and the transformations we've achieved for our patients
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl">
            <CarouselSlider />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
