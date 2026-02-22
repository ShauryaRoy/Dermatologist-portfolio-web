import { motion } from "framer-motion";
import psoriasisAfter from "@assets/wmremove-transformed_1771706643834.jpeg";

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
      </div>
    </section>
  );
}
