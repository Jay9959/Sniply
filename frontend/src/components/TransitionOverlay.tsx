import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionOverlayProps {
    isActive: boolean;
    text: string;
}

const TransitionOverlay: React.FC<TransitionOverlayProps> = ({ isActive, text }) => {
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                    className="fixed inset-0 bg-[#050505] z-[9999] flex items-center justify-center border-l-8 border-[var(--primary)]"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-[var(--primary)] text-4xl md:text-6xl font-['Playfair_Display'] tracking-[10px] md:tracking-[20px] uppercase font-bold"
                    >
                        {text}
                    </motion.h2>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TransitionOverlay;
