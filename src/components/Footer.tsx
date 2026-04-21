import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-concrete-800 text-concrete-200">
      {/* Main Footer */}
      <div className="container-boxed py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold italic text-card mb-4">PREGMAT</h3>
            <p className="text-concrete-400 text-sm leading-relaxed">
              Vaš pouzdan partner za sve građevinske materijale i alate. 
              Kvalitetni proizvodi po pristupačnim cenama za profesionalne izvođače i majstore.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-card mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span>Industrijska zona bb, 11000 Beograd, Srbija</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="tel:+381111234567" className="hover:text-accent transition-colors">
                  +381 11 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@pregmat.rs" className="hover:text-accent transition-colors">
                  info@pregmat.rs
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-card mb-4">Brzi linkovi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#categories" className="hover:text-accent transition-colors">Kategorije</a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">Proizvodi</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">O nama</a>
              </li>
            </ul>
          </div>

          {/* Social & Map */}
          <div>
            <h4 className="font-bold text-card mb-4">Pratite nas</h4>
            <div className="flex gap-3 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-concrete-700 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-concrete-700 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-concrete-700 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 rounded-lg overflow-hidden h-48 bg-concrete-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181147.4197790024!2d20.22814855!3d44.815573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade%2C%20Serbia!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokacija PREGMAT"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-concrete-700">
        <div className="container-boxed py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-concrete-500">
          <p>&copy; 2024 PREGMAT. Sva prava zadržana.</p>
          <p>Razvijeno sa ❤️ u Srbiji</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
