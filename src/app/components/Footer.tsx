import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1020] text-[#F8FAFB]/80 border-t border-[#14D5C7]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img
              src="https://res.cloudinary.com/dyp247eoh/image/upload/v1778906689/Artboard_2_5x-100_daeaj9.jpg"
              alt="HANAMICHI"
              className="h-12 w-auto mb-6"
            />
            <p className="text-sm leading-relaxed mb-4">
              Nurturing globally confident individuals who can carve their own path on the world stage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#14D5C7] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#14D5C7] transition-colors">About</Link></li>
              <li><Link to="/programs" className="hover:text-[#14D5C7] transition-colors">Programs</Link></li>
              <li><Link to="/partners" className="hover:text-[#14D5C7] transition-colors">Partners</Link></li>
              <li><Link to="/faq" className="hover:text-[#14D5C7] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-[#14D5C7] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-[#14D5C7] mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/programs/study-tours" className="hover:text-[#14D5C7] transition-colors">Study Tours</Link></li>
              <li><Link to="/programs/university" className="hover:text-[#14D5C7] transition-colors">University Admission</Link></li>
              <li><Link to="/programs/counselling" className="hover:text-[#14D5C7] transition-colors">Counselling</Link></li>
              <li><Link to="/programs/workshop" className="hover:text-[#14D5C7] transition-colors">Workshops</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#14D5C7] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#14D5C7]" />
                <span className="text-sm">2-1-3 Nigawa Takamaru, Takarazuka, Hyogo, Japan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-[#14D5C7]" />
                <a href="tel:0798-98-2860" className="text-sm hover:text-[#14D5C7] transition-colors">
                  0798-98-2860
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-[#14D5C7]" />
                <a href="mailto:infohanamichillc@gmail.com" className="text-sm hover:text-[#14D5C7] transition-colors">
                  infohanamichillc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#14D5C7]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} HANAMICHI LLC. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm hover:text-[#14D5C7] transition-colors">Privacy Policy</Link>
            <Link to="/legal" className="text-sm hover:text-[#14D5C7] transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
