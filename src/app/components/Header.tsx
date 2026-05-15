import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
const mtikaLogo = '/logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-primary/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex-shrink-0 flex items-center h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <ImageWithFallback src={mtikaLogo} alt="Mtika Technologies Logo" className="h-14 w-auto object-contain" />
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <motion.div
              className="flex items-baseline space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {['home', 'services', 'about', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm transition-colors relative group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <motion.span
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-primary/10">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary block px-3 py-2 text-base transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary block px-3 py-2 text-base transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary block px-3 py-2 text-base transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary block px-3 py-2 text-base transition-colors w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}