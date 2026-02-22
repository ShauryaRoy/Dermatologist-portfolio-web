import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAF9F6]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#f2ebe5] opacity-60 rounded-l-[100px] hidden lg:block -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
            <Sparkles size={14} />
            <span>Science Meets Aesthetic Confidence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-foreground">
            Rediscover Your <br />
            <span className="text-primary italic">Natural Glow</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Experience world-class dermatological care and aesthetic precision with Dr. Debaleena Ghosh. 
            Dermatologist, Trichologist & Aesthetician with a passion for scientific skincare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 text-base bg-foreground text-background hover:bg-foreground/90 h-14"
              onClick={() => window.open("https://wa.me/917003571843", "_blank")}
            >
              Book Consultation
            </Button>
            
            <Link to="contact" smooth={true} duration={500}>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 text-base border-primary/30 text-foreground hover:bg-primary/5 h-14 group"
              >
                Online Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex -space-x-3">
              {/* Dummy Avatars */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-200 flex items-center justify-center overflow-hidden">
                   {/* Avatar placeholder - light gray */}
                   <div className="w-full h-full bg-gray-300"></div>
                </div>
              ))}
            </div>
            <p>Trusted by <span className="font-bold text-foreground">5000+</span> happy patients</p>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] md:h-[700px] w-full flex justify-center lg:justify-end"
        >
          <div className="relative h-full w-full max-w-md lg:max-w-lg rounded-t-[200px] overflow-hidden shadow-2xl border-8 border-white">
            {/* Elegant Portrait Placeholder - Unsplash */}
            {/* Woman with clear skin close up portrait */}
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop" 
              alt="Dr. Debaleena Ghosh" 
              className="w-full h-full object-cover"
            />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-[200px]"
            >
              <p className="font-serif text-2xl font-bold text-primary">4+</p>
              <p className="text-sm text-muted-foreground">Years of Clinical Excellence</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
