import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/programs', label: t('nav.programs') },
    { path: '/why-hanamichi', label: t('nav.whyUs') },
    { path: '/partners', label: t('nav.partners') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ];

  // Always show solid background on non-home pages or when scrolled
  const showSolidBg = !isHomePage || isScrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showSolidBg
          ? 'bg-[#0B1020]/95 backdrop-blur-xl border-b border-[#14D5C7]/20 shadow-lg shadow-[#14D5C7]/5'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://res.cloudinary.com/dyp247eoh/image/upload/v1778906689/Artboard_2_5x-100_daeaj9.jpg"
              alt="HANAMICHI"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-300 relative group font-medium text-sm lg:text-base ${location.pathname === link.path ? 'text-[#14D5C7]' : 'text-[#F8FAFB]/80 hover:text-[#14D5C7]'
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#14D5C7] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </Link>
            ))}

            <Link
              to="/contact"
              className="px-5 py-2 bg-gradient-to-r from-[#14D5C7] to-[#14D5C7]/80 text-[#0B1020] rounded-full hover:shadow-lg hover:shadow-[#14D5C7]/50 transition-all duration-300 font-semibold text-sm"
            >
              {t('nav.freeConsultation')}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/10">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-[#14D5C7] text-[#0B1020]' : 'text-[#F8FAFB]/50 hover:text-[#F8FAFB]'
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('jp')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'jp' ? 'bg-[#14D5C7] text-[#0B1020]' : 'text-[#F8FAFB]/50 hover:text-[#F8FAFB]'
                  }`}
              >
                JP
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F8FAFB] hover:text-[#14D5C7] transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div className="flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/10 scale-90">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'en' ? 'bg-[#14D5C7] text-[#0B1020]' : 'text-[#F8FAFB]/50'
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('jp')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'jp' ? 'bg-[#14D5C7] text-[#0B1020]' : 'text-[#F8FAFB]/50'
                  }`}
              >
                JP
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 transition-colors ${location.pathname === link.path ? 'text-[#14D5C7]' : 'text-[#F8FAFB]/80'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-2.5 bg-gradient-to-r from-[#14D5C7] to-[#14D5C7]/80 text-[#0B1020] rounded-full text-center font-bold"
                >
                  {t('nav.freeConsultation')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

