import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

interface NavbarProps {
  onNavClick?: (targetId: string, itemName: string) => void;
  onLoginClick?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, onLoginClick, isLoggedIn, userName }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, itemName: string) => {
    if (onNavClick) {
      e.preventDefault();
      onNavClick(targetId, itemName);
    }
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const menuItems = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] flex justify-center pt-6 px-4 pointer-events-none">
      <motion.div 
        className={`pointer-events-auto flex justify-between items-center w-full max-w-6xl transition-all duration-500 rounded-full px-8 py-4 ${isScrolled ? 'glass-nav shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="logo flex items-center cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={(e: any) => handleNavClick(e, 'home', 'Home')}
        >
          <img src="/sniply.png" alt="Sniply" className="h-10 md:h-12 w-auto object-contain" />
        </motion.div>

        <ul className="hidden lg:flex list-none gap-[40px] m-0">
          {menuItems.map((item, i) => (
            <motion.li
              key={item.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="group"
            >
              <a
                href={`#${item.href}`}
                className={`text-[11px] font-semibold text-[var(--text-light)] uppercase tracking-[0.2em] relative py-[10px] transition-all duration-300 hover:text-[var(--primary)] ${item.name === 'Home' ? 'text-[var(--primary)]' : 'opacity-80 hover:opacity-100'}`}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          {isLoggedIn ? (
            <motion.div
              className="px-6 py-2.5 glass-panel text-white font-medium rounded-full uppercase text-[10px] tracking-[0.15em] cursor-pointer flex items-center gap-2 transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onLoginClick}
            >
              <User size={16} className="text-[var(--primary)]" />
              <span>{userName || 'Account'}</span>
            </motion.div>
          ) : (
            <motion.button
              className="px-7 py-3 bg-[var(--primary)] text-black font-semibold rounded-full uppercase text-[10px] tracking-[0.15em] cursor-pointer flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(242,201,76,0.5)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={onLoginClick}
            >
              Client Login
            </motion.button>
          )}
        </div>

        <div className="lg:hidden flex items-center cursor-pointer pointer-events-auto">
          {/* Mobile menu button placeholder */}
          <div className="w-8 h-8 flex flex-col justify-center gap-1.5 items-end">
            <div className="w-6 h-[1.5px] bg-[var(--text-light)]"></div>
            <div className="w-8 h-[1.5px] bg-[var(--primary)]"></div>
            <div className="w-4 h-[1.5px] bg-[var(--text-light)]"></div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
