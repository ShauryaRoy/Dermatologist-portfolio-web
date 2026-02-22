import { locations } from "@/lib/data";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Locations() {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Visit Us</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4">Clinic Locations</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div key={loc.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row h-full">
              {/* Map Column */}
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
                <iframe 
                  src={loc.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
              
              {/* Details Column */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{loc.name}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="shrink-0 mt-1 text-primary" size={18} />
                      <p className="text-sm">{loc.address}</p>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Calendar className="shrink-0 mt-1 text-primary" size={18} />
                      <p className="text-sm">Visiting Days: <span className="font-medium text-foreground">{loc.visitingDays.join(", ")}</span></p>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.open(loc.bookingLink, "_blank")}
                >
                  Book Appointment <ExternalLink size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
