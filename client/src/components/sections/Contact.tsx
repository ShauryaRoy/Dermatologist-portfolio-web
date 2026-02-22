import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-white">Start Your Skin Journey</h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                Have questions about a treatment? Ready to book your consultation? Reach out to us directly or fill the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-wide">Call Us</p>
                  <a href="tel:7003571843" className="text-xl font-medium hover:text-primary transition-colors">7003571843</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-wide">Email Us</p>
                  <a href="mailto:debaleenaghosh1996@gmail.com" className="text-xl font-medium hover:text-primary transition-colors">debaleenaghosh1996@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/40 mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full border-white/20 bg-transparent hover:bg-white/10 hover:text-primary text-white h-12 w-12"
                  onClick={() => window.open("https://www.instagram.com/dr.debaleenaghosh", "_blank")}
                >
                  <Instagram size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-white/20 bg-transparent hover:bg-white/10 hover:text-primary text-white h-12 w-12">
                  <Facebook size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-2 h-[600px] overflow-hidden">
            {/* Google Form Embed */}
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSc84ImjQidjkFRf0IJOtnIapSyiIyltfDcLhiZnzMW3wTL-dw/viewform?embedded=true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full h-full rounded-xl bg-gray-50"
            >
              Loading…
            </iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
