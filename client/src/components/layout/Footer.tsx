import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-100 pt-16 pb-8 border-t border-stone-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">KOKORO</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Embodying the heart and soul of traditional Japanese wellness. 
              A sanctuary to escape, relax, and rejuvenate.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors border border-border">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors border border-border">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-serif font-semibold mb-6 tracking-wide">CONTACT US</h4>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start space-x-3 text-muted-foreground">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <span>123 Douglas Parade,<br />Williamstown, VIC 3016</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-muted-foreground">
                <Phone size={18} />
                <span>(03) 9397 0000</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-muted-foreground">
                <Mail size={18} />
                <span>info@kokoroheadspa.com.au</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-serif font-semibold mb-6 tracking-wide">OPENING HOURS</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between md:justify-start md:space-x-8">
                <span className="w-24">Mon - Wed</span>
                <span>10:00am - 6:00pm</span>
              </li>
              <li className="flex justify-between md:justify-start md:space-x-8">
                <span className="w-24">Thu - Fri</span>
                <span>10:00am - 8:00pm</span>
              </li>
              <li className="flex justify-between md:justify-start md:space-x-8">
                <span className="w-24">Saturday</span>
                <span>9:00am - 5:00pm</span>
              </li>
              <li className="flex justify-between md:justify-start md:space-x-8">
                <span className="w-24">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kokoro Japanese Head Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
