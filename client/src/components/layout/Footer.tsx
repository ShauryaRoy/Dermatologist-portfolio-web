import { Link } from "react-scroll";
import { Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-white/60 py-12 border-t border-white/10 text-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-serif font-bold text-white">Dr. Debaleena Ghosh</span>
            <p>© {currentYear} All rights reserved.</p>
          </div>

          <div className="flex gap-8">
            <Link to="about" smooth={true} className="hover:text-primary cursor-pointer transition-colors">About</Link>
            <Link to="services" smooth={true} className="hover:text-primary cursor-pointer transition-colors">Services</Link>
            <Link to="contact" smooth={true} className="hover:text-primary cursor-pointer transition-colors">Contact</Link>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>

        </div>

        <div className="flex items-center justify-center gap-2 pt-6 border-t border-white/10">
          <span className="text-xs">Made by</span>
          <a 
            href="https://github.com/ShauryaRoy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
