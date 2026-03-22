import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-[#050505] border-t border-[var(--glass-border)] pt-24 pb-8 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-20"></div>
            
            <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
                <div className="flex flex-col gap-6">
                    <div>
                        <img src="/sniply.png" alt="Sniply" className="h-12 w-auto object-contain" />
                    </div>
                    <p className="text-[var(--text-gray)] font-light leading-relaxed text-sm">
                        Premium grooming for the modern gentleman since 2012.
                        Elevating your personal style with precision and uncompromising care.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-gray)] hover:text-[#f2c94c] hover:border-[#f2c94c] transition-all duration-300"><Instagram size={18} /></a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-gray)] hover:text-[#f2c94c] hover:border-[#f2c94c] transition-all duration-300"><Facebook size={18} /></a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-gray)] hover:text-[#f2c94c] hover:border-[#f2c94c] transition-all duration-300"><Twitter size={18} /></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-['Playfair_Display'] text-xl mb-6">Navigation</h3>
                    <ul className="flex flex-col gap-4">
                        <li><a href="#home" className="text-[var(--text-gray)] hover:text-white transition-colors text-sm font-light">Home</a></li>
                        <li><a href="#services" className="text-[var(--text-gray)] hover:text-white transition-colors text-sm font-light">Services</a></li>
                        <li><a href="#pricing" className="text-[var(--text-gray)] hover:text-white transition-colors text-sm font-light">Pricing</a></li>
                        <li><a href="#gallery" className="text-[var(--text-gray)] hover:text-white transition-colors text-sm font-light">Portfolio Gallery</a></li>
                        <li><a href="#about" className="text-[var(--text-gray)] hover:text-white transition-colors text-sm font-light">Our Legacy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-['Playfair_Display'] text-xl mb-6">Contact</h3>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-start gap-3 text-[var(--text-gray)] text-sm font-light">
                            <Phone size={18} className="text-[#f2c94c] mt-0.5" /> <span>+1 (212) 555-0198</span>
                        </li>
                        <li className="flex items-start gap-3 text-[var(--text-gray)] text-sm font-light">
                            <Mail size={18} className="text-[#f2c94c] mt-0.5" /> <span>concierge@sniply.com</span>
                        </li>
                        <li className="flex items-start gap-3 text-[var(--text-gray)] text-sm font-light">
                            <MapPin size={18} className="text-[#f2c94c] mt-0.5" /> <span>742 Fifth Ave, 12th Floor<br/>Manhattan, NY 10019</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-['Playfair_Display'] text-xl mb-6">Availability</h3>
                    <ul className="flex flex-col gap-4">
                        <li className="flex justify-between items-center text-sm border-b border-[var(--glass-border)] pb-3">
                            <span className="text-white font-medium">Mon - Sat</span>
                            <span className="text-[var(--text-gray)] font-light">9:00 AM - 9:00 PM</span>
                        </li>
                        <li className="flex justify-between items-center text-sm border-b border-[var(--glass-border)] pb-3">
                            <span className="text-white font-medium">Sunday</span>
                            <span className="text-[var(--text-gray)] font-light">10:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between items-center text-sm pt-2">
                            <span className="text-[#f2c94c] font-medium">Members</span>
                            <span className="text-white font-light">24/7 Priority Access</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container max-w-7xl mx-auto px-6 border-t border-[var(--glass-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                <p className="text-[var(--text-gray)] text-xs font-light">&copy; {new Date().getFullYear()} SNIPLY. All rights reserved.</p>
                <div className="flex gap-6 text-[var(--text-gray)] text-xs font-light">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
