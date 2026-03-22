import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Essentials',
        price: '₹2,499',
        features: [
            'Consultation & Hair/Scalp Analysis',
            'Precision Hair Cut & Styling',
            'Signature Wash & Blow Dry',
            'Neck Taper & Clean Finish',
            'Premium Styling Products',
            'Complimentary Beverage'
        ],
        recommended: false
    },
    {
        name: 'Platinum',
        price: '₹4,999',
        features: [
            'All Essentials Features',
            'Dimensional Hair Coloring',
            'Deep Conditioning Hair Spa',
            'Luxury Facial Treatment',
            'Priority Booking',
            'Signature Beverage Service',
            'Quick Head Massage (10 mins)'
        ],
        recommended: true
    },
    {
        name: 'Royal',
        price: '₹8,999',
        features: [
            'Complete Platinum Suite',
            'Full Body Grooming Experience',
            'Premium Beard Sculpting',
            'Advanced Skin Treatment',
            'Home Care Styling Kit (Worth ₹1,500)',
            'Pre-Event Photoshoot Styling',
            'Exclusive After-Hours Access'
        ],
        recommended: false
    }
];

interface PricingProps {
    onSelectPlan: (plan: { name: string, price: string }) => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
    return (
        <section className="relative py-32 bg-[#020202] overflow-hidden" id="pricing">
            <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[rgba(242,201,76,0.04)] blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6 text-white tracking-wide"
                    >
                        Exclusive <span className="text-[var(--primary)] text-gradient">Packages</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[var(--text-gray)] max-w-2xl mx-auto text-lg font-light leading-relaxed"
                    >
                        Transparent pricing for uncompromising quality. Choose the experience
                        that fits your lifestyle.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                >
                    {plans.map((plan, index) => (
                        <motion.div 
                            variants={itemVariants} 
                            key={index}
                            className={`relative rounded-3xl transition-all duration-500 ${plan.recommended ? 'p-[2px] bg-gradient-to-b from-[var(--primary)] to-[var(--bg-dark)] scale-100 md:scale-105 z-10 shadow-[0_20px_50px_rgba(242,201,76,0.15)]' : 'p-[1px] bg-[var(--glass-border)]'}`}
                        >
                            <div className={`h-full flex flex-col p-10 rounded-[22px] glass-panel bg-[var(--bg-darker)] ${plan.recommended ? 'bg-[#0a0a09]' : ''}`}>
                                {plan.recommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--primary)] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(242,201,76,0.4)]">
                                        Most Popular
                                    </div>
                                )}
                                
                                <h3 className="text-2xl font-['Playfair_Display'] text-white mb-2">{plan.name}</h3>
                                <div className="mb-2 flex items-baseline gap-1">
                                    <span className="text-[var(--primary)] text-3xl font-light">{plan.price.substring(0, 1)}</span>
                                    <span className="text-white text-5xl font-bold">{plan.price.substring(1)}</span>
                                    <span className="text-[var(--text-gray)] text-sm ml-1">/session</span>
                                </div>
                                <p className="text-sm border-b border-[var(--glass-border)] pb-8 mb-8 text-[var(--text-gray)] h-12">
                                    {plan.name === 'Essentials' && 'Perfect for regular premium grooming'}
                                    {plan.name === 'Platinum' && 'Luxury grooming experience'}
                                    {plan.name === 'Royal' && 'Ultimate VIP Experience'}
                                </p>
                                
                                <ul className="flex-1 space-y-5 mb-10">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-4">
                                            <div className={`mt-0.5 rounded-full p-1 ${plan.recommended ? 'bg-[rgba(242,201,76,0.1)] text-[var(--primary)]' : 'bg-[#1a1a1a] text-[var(--text-gray)]'}`}>
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm text-[var(--text-gray)] leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button
                                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-[0.15em] text-xs transition-all duration-300 ${plan.recommended ? 'bg-[var(--primary)] text-black hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'bg-transparent border border-[var(--glass-border)] text-white hover:border-[var(--primary)] hover:text-[var(--primary)]'}`}
                                    onClick={() => onSelectPlan({ name: plan.name, price: plan.price })}
                                >
                                    Select Package
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
