import { useState } from "react";
import { services } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Clock, Sun, Zap, Activity, Smile, ArrowUpRight } from "lucide-react";

const iconMap: Record<string, any> = {
  Sparkles,
  Clock,
  Sun,
  Zap,
  Activity,
  Smile,
};

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-4">Curated Aesthetic Treatments</h2>
          <p className="text-muted-foreground">
            We offer a comprehensive range of clinical and cosmetic treatments tailored to your unique skin needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                
                <div className="w-12 h-12 rounded-xl bg-[#F5F0EB] text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {Icon && <Icon size={24} />}
                </div>
                
                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary text-sm font-bold tracking-wide">
                  <span>LEARN MORE</span>
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-[500px] bg-white border-none rounded-2xl shadow-2xl p-0 overflow-hidden">
          {selectedService && (
            <>
              <div className="bg-[#F5F0EB] p-8 pb-12 relative">
                <div className="absolute top-4 right-4">
                  {/* Icon of the service */}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                  {selectedService.category}
                </span>
                <DialogTitle className="text-3xl font-serif text-foreground">
                  {selectedService.title}
                </DialogTitle>
              </div>
              
              <div className="p-8 -mt-6 bg-white rounded-t-3xl relative z-10">
                <DialogDescription className="text-base text-muted-foreground leading-relaxed mb-6">
                  {selectedService.longDescription}
                </DialogDescription>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-foreground">Benefits</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Personalized protocol
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> FDA-approved technology
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Minimal downtime
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Button 
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl h-12 text-base"
                    onClick={() => window.open(`https://wa.me/917003571843?text=I'm interested in ${selectedService.title}`, "_blank")}
                  >
                    Book for {selectedService.title}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
