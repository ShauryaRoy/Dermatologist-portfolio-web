import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Results", to: "gallery" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Locations", to: "locations" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex flex-col">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-serif font-bold text-foreground cursor-pointer"
          >
            Dr. Debaleena Ghosh
          </Link>
          <span className="text-xs uppercase tracking-widest text-muted-foreground hidden sm:block">
            Dermatologist, Trichologist & Aesthetician
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
            onClick={() => window.open("https://wa.me/917003571843", "_blank")}
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-lg font-serif text-foreground hover:text-primary cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="w-full bg-primary text-white rounded-full mt-2"
                onClick={() => window.open("https://wa.me/917003571843", "_blank")}
              >
                Book Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
