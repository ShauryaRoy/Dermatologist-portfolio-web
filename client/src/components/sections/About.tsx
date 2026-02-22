import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Award, Calendar, Users, CheckCircle } from "lucide-react";

// Map icon strings to components
const iconMap: Record<string, any> = {
  Award,
  Calendar,
  Users,
  CheckCircle,
};

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 mt-12"
            >
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                {/* Clinic Interior - Clean White */}
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=60" 
                  alt="Clinic Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-[#F5F0EB] rounded-2xl">
                <h3 className="font-serif text-xl font-bold mb-2">My Philosophy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "I believe that skincare is healthcare. My approach combines evidence-based medicine with artistic precision to enhance your natural beauty, not mask it."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="p-6 bg-primary/10 rounded-2xl h-40 flex flex-col justify-center">
                <span className="text-4xl font-serif text-primary font-bold mb-1">MBBS, MD</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Dermatology</span>
              </div>
              <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
                {/* Doctor working / Consultation */}
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60" 
                  alt="Consultation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest">About The Doctor</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Dr. Debaleena Ghosh</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Dr. Debaleena Ghosh is a qualified Dermatologist, Trichologist and Aesthetician with 4 years of clinical experience in medical and aesthetic dermatology. She specializes in acne, hair disorders, pigmentation, psoriasis management, and advanced aesthetic procedures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Her approach combines evidence-based dermatological care with modern regenerative and laser treatments to deliver safe, personalized, result-oriented skin and hair solutions.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, idx) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      {Icon && <Icon size={20} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
