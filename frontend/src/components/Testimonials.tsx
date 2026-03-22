import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Isabella Thorne',
        role: 'FASHION EXECUTIVE',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
        quote: "I've been to salons all over the world, but the level of precision and hospitality at Sniply is unmatched. My stylist understood exactly what I needed."
    },
    {
        name: 'Julian Vance',
        role: 'VENTURE CAPITALIST',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
        quote: "More than just a haircut, it's a ritual. I leave every session feeling refreshed and ready to take on the boardroom. Best grooming service in the city."
    },
    {
        name: 'Elara Montgomery',
        role: 'LUXURY WEDDING PLANNER',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
        quote: "The bridal team at Sniply made my wedding day stress-free. Their attention to detail on my hair and makeup was breathtaking. Truly professionals."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const Testimonials: React.FC = () => {
    return (
        <section className="relative py-32 bg-[#000]" id="reviews">
            <div className="absolute top-[30%] right-[0%] w-[30%] h-[50%] rounded-full bg-[rgba(242,201,76,0.02)] blur-[100px] pointer-events-none"></div>

            <div className="container relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6 text-white tracking-wide"
                    >
                        Client <span className="text-gradient">Experience</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg font-light leading-relaxed"
                    >
                        Read what our distinguished clientele has to say about their Sniply experience.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((item, index) => (
                        <motion.div 
                            variants={itemVariants}
                            key={index} 
                            className="group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-[var(--glass-border)] to-transparent hover:from-[rgba(242,201,76,0.3)] transition-all duration-700"
                        >
                            <div className="h-full bg-[var(--bg-darker)] rounded-[2rem] p-10 glass-panel flex flex-col items-center text-center transition-all duration-700 group-hover:bg-[#080808] group-hover:-translate-y-2">
                                <div className="absolute top-10 right-10 opacity-10 text-[var(--primary)] group-hover:opacity-20 transition-opacity">
                                    <Quote size={60} />
                                </div>
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                                    ))}
                                </div>

                                <blockquote className="text-[var(--text-light)] text-sm md:text-base font-light italic leading-relaxed mb-10 flex-1 relative z-10">
                                    "{item.quote}"
                                </blockquote>

                                <div className="flex flex-col items-center mt-auto">
                                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[var(--glass-border)] group-hover:border-[var(--primary)] transition-colors duration-500">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h4 className="text-white font-['Playfair_Display'] text-lg font-bold tracking-wide">{item.name}</h4>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--primary)] mt-1 font-semibold">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
