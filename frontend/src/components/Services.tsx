import React from 'react';
import { Scissors, Palette, Sparkles, Crown, User, Gift, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Scissors size={24} />,
        image: '../public/Services/Services1.png',
        title: 'Precision Haircut',
        description: 'Masterful cutting techniques tailored to your facial structure and hair texture for a timeless look.',
        price: 'From $65'
    },
    {
        icon: <Palette size={24} />,
        image: '../public/Services/Services2.png',
        title: 'Artisanal Coloring',
        description: 'Dimensional color services including Balayage, Ombre, and full-spectrum transformations using premium dyes.',
        price: 'From $120'
    },
    {
        icon: <Sparkles size={24} />,
        image: '../public/Services/Services3.png',
        title: 'Skin Rejuvenation',
        description: 'Dermatologist-approved facial treatments that restore your natural glow and target specific skin concerns.',
        price: 'From $95'
    },
    {
        icon: <Crown size={24} />,
        image: '../public/Services/Services4.png',
        title: 'Bridal Perfection',
        description: 'Comprehensive wedding day grooming including hair, makeup, and pre-event consultation for your special day.',
        price: 'By Quote'
    },
    {
        icon: <User size={24} />,
        image: '../public/Services/Services5.png',
        title: 'Grooming Packages',
        description: 'Full-body grooming experiences for the modern gentleman, combining haircuts, beard styling, and skincare.',
        price: 'From $110'
    },
    {
        icon: <Gift size={24} />,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
        title: 'Luxury Spa Rituals',
        description: 'Relaxation-focused scalp massages and hair health treatments using organic, essential oils.',
        price: 'From $55'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const Services: React.FC = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-[var(--bg-dark)]" id="services">
            <div className="absolute top-0 right-[-20%] w-[50%] h-[50%] rounded-full bg-[rgba(242,201,76,0.03)] blur-[100px] pointer-events-none"></div>

            <div className="container relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-['Playfair_Display'] italic font-bold tracking-wide text-white"
                    >
                        Curated Services
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "3rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-[2px] bg-[var(--primary)] mx-auto mt-4 mb-6"
                    ></motion.div>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-[var(--text-gray)] max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed"
                    >
                        Explore our comprehensive range of luxury treatments designed for the modern individual who demands excellence.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div 
                            variants={itemVariants}
                            className="group bg-[#111111] rounded-2xl overflow-hidden flex flex-col h-full border border-[var(--glass-border)] hover:border-[rgba(242,201,76,0.3)] transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
                            key={index}
                        >
                            {/* Image Container */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                {/* Yellow Circle Icon Badge */}
                                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center text-black shadow-lg">
                                    {React.cloneElement(service.icon as React.ReactElement, { size: 16 })}
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-6 flex flex-col flex-1 bg-[#1a1a1a]">
                                <h3 className="text-xl font-bold mb-3 text-white font-['Playfair_Display'] group-hover:text-[var(--primary)] transition-colors">{service.title}</h3>
                                <p className="text-sm text-[var(--text-gray)] flex-1 leading-relaxed mb-8">{service.description}</p>
                                
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--glass-border)]">
                                    <span className="text-[var(--primary)] font-bold text-sm tracking-widest uppercase">{service.price}</span>
                                    <a href="#book" className="flex items-center gap-2 text-white text-[10px] uppercase font-bold tracking-[0.15em] opacity-80 hover:opacity-100 hover:text-[var(--primary)] transition-all">
                                        BOOK SERVICE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
