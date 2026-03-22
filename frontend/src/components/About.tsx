import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section className="relative py-32 bg-[#020202] overflow-hidden" id="about">
            <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(242,201,76,0.03)] blur-[100px] pointer-events-none"></div>

            <div className="container relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex-1 w-full relative"
                >
                    <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden p-[2px] bg-gradient-to-br from-[var(--primary)] to-transparent">
                        <div className="absolute inset-[2px] rounded-[calc(2rem-2px)] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1472"
                                alt="Stylist at work"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute bottom-8 -right-8 md:-right-12 glass-panel p-6 rounded-2xl bg-[var(--bg-darker)] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-l-4 border-[var(--primary)]"
                    >
                        <span className="block text-3xl font-['Playfair_Display'] font-bold text-white mb-1">Since</span>
                        <span className="block text-4xl text-[var(--primary)] font-light tracking-widest">2012</span>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <div className="inline-block px-4 py-1.5 bg-[rgba(242,201,76,0.1)] border border-[rgba(242,201,76,0.2)] text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-full">
                        Our Legacy
                    </div>
                    <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-8 text-white leading-tight">
                        Crafting Perfection <br />
                        <span className="text-gradient">for Over a Decade</span>
                    </h2>

                    <div className="space-y-6 text-[var(--text-gray)] text-lg mb-12 font-light leading-relaxed">
                        <p>
                            Sniply was born from a simple vision: to bridge the gap between classic
                            barbering techniques and contemporary aesthetic artistry. What started
                            as a small boutique has evolved into the city's premier grooming sanctuary.
                        </p>
                        <p>
                            Our mission is to empower individuals through meticulous style. Every chair
                            at Sniply is occupied by a master craftsman who shares our dedication to
                            perfection, using only the finest tools and products available globally.
                        </p>
                    </div>

                    <div className="flex gap-12 pt-8 border-t border-[var(--glass-border)]">
                        <div>
                            <h4 className="text-4xl font-['Playfair_Display'] text-white mb-2">15k<span className="text-[var(--primary)]">+</span></h4>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-gray)] font-semibold">Satisfied Clients</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-['Playfair_Display'] text-white mb-2">24</h4>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-gray)] font-semibold">Master Stylists</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
