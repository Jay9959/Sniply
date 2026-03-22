import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
            {/* The background is handled by ThreeBackground. Adding a subtle radial gradient overlay to focus the center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80 z-10 pointer-events-none"></div>
            
            <div className="container relative z-20 max-w-5xl text-center flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center px-5 py-2 glass-panel text-[var(--primary)] text-xs font-semibold uppercase tracking-[0.2em] mb-10 rounded-full"
                >
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-3 animate-pulse"></span>
                    Premier Luxury Grooming
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-normal leading-[1.1] mb-8 text-white tracking-tight"
                >
                    <span className="block font-['Playfair_Display'] italic opacity-90">Where Style</span>
                    <span className="block font-bold text-gradient mt-2 pb-2">Meets Perfection</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-[var(--text-gray)] max-w-2xl mb-12 font-light tracking-wide leading-relaxed"
                >
                    Experience the pinnacle of modern grooming and aesthetic excellence.
                    Our master craftsmen redefine sophistication with every stroke.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 relative"
                >
                    <div className="absolute inset-0 bg-[var(--primary)] blur-xl opacity-20 rounded-full animate-blob"></div>
                    <a href="#book" className="relative group px-10 py-5 bg-white text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(242,201,76,0.4)]">
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">Reserve Your Appointment</span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-in-out"></div>
                    </a>
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 text-[var(--text-gray)] text-[10px] uppercase tracking-[0.3em]"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--primary)] to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white blur-[2px] animate-[float_2s_ease-in-out_infinite]"></div>
                </div>
                <span>Discover</span>
            </motion.div>
        </section>
    );
};

export default Hero;
