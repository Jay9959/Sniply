import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
    const images = [
        {
            url: '../public/Gallary/Gallary1.png',
            alt: 'Portrait of woman with blonde hair',
            label: 'Signature Styling'
        },
        {
            url: '../public/Gallary/Gallary2.png',
            alt: 'Man with sharp haircut',
            label: 'Precision Cuts'
        },
        {
            url: '../public/Gallary/Gallary3.png',
            alt: 'Wedding hairstyle',
            label: 'Bridal Elegance'
        },
        {
            url: '../public/Gallary/Gallary4.png',
            alt: 'Barber at work',
            label: 'Master Craftsmanship'
        }
    ];

    return (
        <section className="relative py-32 bg-[var(--bg-dark)] overflow-hidden" id="gallery">
            <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[rgba(242,201,76,0.03)] blur-[100px] pointer-events-none"></div>

            <div className="container relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6 text-white tracking-wide"
                    >
                        The <span className="text-gradient">Portfolio</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg font-light leading-relaxed"
                    >
                        A visual testament to our artistry. Explore real transformations crafted by our
                        master stylists.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[600px] lg:h-[700px]">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="group relative h-[400px] md:h-full rounded-[2rem] overflow-hidden"
                    >
                        <img src={images[0].url} alt={images[0].alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-3xl font-['Playfair_Display'] text-white tracking-wide mb-2">{images[0].label}</h3>
                            <div className="w-12 h-0.5 bg-[var(--primary)] transition-all duration-500 group-hover:w-24"></div>
                        </div>
                    </motion.div>

                    <div className="grid grid-rows-2 gap-6 h-[800px] md:h-full">
                        <div className="grid grid-cols-2 gap-6 h-full">
                            {[images[1], images[2]].map((img, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: -30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2 + (idx * 0.2) }}
                                    className="group relative rounded-[2rem] overflow-hidden"
                                >
                                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center glass-panel m-4 rounded-[1.5rem]">
                                        <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-white scale-90 group-hover:scale-100 transition-transform duration-500">{img.label}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="group relative rounded-[2rem] overflow-hidden h-full"
                        >
                            <img src={images[3].url} alt={images[3].alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 right-0 p-10 text-right translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-['Playfair_Display'] text-white tracking-wide mb-2">{images[3].label}</h3>
                                <div className="w-12 h-0.5 bg-[var(--primary)] ml-auto transition-all duration-500 group-hover:w-24"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
