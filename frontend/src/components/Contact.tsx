import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <section className="relative py-32 bg-[var(--bg-dark)] overflow-hidden" id="contact">
            <div className="absolute top-[0%] left-[-10%] w-[30%] h-[50%] rounded-full bg-[rgba(242,201,76,0.02)] blur-[80px] pointer-events-none"></div>

            <div className="container relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full"
                >
                    <div className="inline-block px-4 py-1.5 bg-[rgba(242,201,76,0.1)] border border-[rgba(242,201,76,0.2)] text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-full">
                        Reach Out
                    </div>
                    <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-12 text-white leading-tight">
                        Visit Our <span className="text-gradient">Sanctuary</span>
                    </h2>

                    <div className="space-y-6 mb-12">
                        <div className="group flex items-center gap-6 p-6 rounded-2xl glass-panel bg-[var(--glass-bg)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 border border-[var(--glass-border)] cursor-pointer">
                            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgba(242,201,76,0.05)] border border-[var(--glass-border)] group-hover:bg-[var(--primary)] group-hover:text-black transition-colors duration-300 text-[var(--primary)]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-['Playfair_Display'] mb-1">Visit Our Salon</h3>
                                <p className="text-[var(--text-gray)] font-light text-sm">742 Fifth Avenue, 12th Floor<br />Manhattan, NY 10019</p>
                            </div>
                        </div>

                        <div className="group flex items-center gap-6 p-6 rounded-2xl glass-panel bg-[var(--glass-bg)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 border border-[var(--glass-border)] cursor-pointer">
                            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgba(242,201,76,0.05)] border border-[var(--glass-border)] group-hover:bg-[var(--primary)] group-hover:text-black transition-colors duration-300 text-[var(--primary)]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-['Playfair_Display'] mb-1">Direct Line</h3>
                                <p className="text-[var(--text-gray)] font-light text-sm">+1 (212) 555-0198</p>
                            </div>
                        </div>

                        <div className="group flex items-center gap-6 p-6 rounded-2xl glass-panel bg-[var(--glass-bg)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 border border-[var(--glass-border)] cursor-pointer">
                            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgba(242,201,76,0.05)] border border-[var(--glass-border)] group-hover:bg-[var(--primary)] group-hover:text-black transition-colors duration-300 text-[var(--primary)]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-['Playfair_Display'] mb-1">Email Concierge</h3>
                                <p className="text-[var(--text-gray)] font-light text-sm">concierge@sniply.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--glass-border)] text-white hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors duration-300">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--glass-border)] text-white hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors duration-300">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--glass-border)] text-white hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors duration-300">
                            <Twitter size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-[2rem] overflow-hidden p-[2px] bg-gradient-to-br from-[var(--glass-border)] to-transparent">
                        <div className="absolute inset-[2px] rounded-[calc(2rem-2px)] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14877.718289612087!2d72.86336325!3d21.214807699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1771951230718!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ filter: 'grayscale(100%) invert(92%) contrast(83%) ' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SNIPLY Location"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
