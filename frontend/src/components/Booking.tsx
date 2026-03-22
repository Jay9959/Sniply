import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
    return (
        <section className="relative py-32 bg-[var(--bg-dark)] overflow-hidden" id="book">
            <div className="absolute top-[10%] left-[-10%] w-[30%] h-[50%] rounded-full bg-[rgba(242,201,76,0.02)] blur-[80px] pointer-events-none"></div>

            <div className="container relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full"
                >
                    <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6 text-white tracking-wide">
                        Book Your <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-[var(--text-gray)] mb-12 text-lg font-light leading-relaxed">
                        Secure your moment of transformation. Please fill in your details and
                        our concierge will confirm your session within 2 hours.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgba(242,201,76,0.1)] text-[var(--primary)]">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-['Playfair_Display'] text-xl mb-2">Opening Hours</h4>
                                <p className="text-[var(--text-gray)] font-light text-sm mb-1">Mon - Sat: 9:00 AM - 9:00 PM</p>
                                <p className="text-[var(--text-gray)] font-light text-sm">Sunday: 10:00 AM - 6:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgba(242,201,76,0.1)] text-[var(--primary)]">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-['Playfair_Display'] text-xl mb-2">Membership Access</h4>
                                <p className="text-[var(--text-gray)] font-light text-sm leading-relaxed">Members get 24/7 priority booking and exclusive home-visit options.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-[500px]"
                >
                    <form className="glass-panel p-10 rounded-[2rem] flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)]">Full Name</label>
                                <input type="text" placeholder="Alexander Pierce" className="bg-transparent border-b border-[var(--glass-border)] py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm placeholder:text-gray-600" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)]">Phone</label>
                                <input type="text" placeholder="+1 (555) 000-0000" className="bg-transparent border-b border-[var(--glass-border)] py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm placeholder:text-gray-600" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)]">Select Service</label>
                            <input type="text" placeholder="e.g. Platinum Styling" className="bg-transparent border-b border-[var(--glass-border)] py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm placeholder:text-gray-600" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)]">Date</label>
                                <input type="date" className="bg-transparent border-b border-[var(--glass-border)] py-3 text-gray-400 focus:outline-none focus:border-[var(--primary)] focus:text-white transition-colors text-sm" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)]">Time</label>
                                <input type="time" className="bg-transparent border-b border-[var(--glass-border)] py-3 text-gray-400 focus:outline-none focus:border-[var(--primary)] focus:text-white transition-colors text-sm" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)]">Special Requirements</label>
                            <textarea rows={3} placeholder="Tell us about your hair goals or skin concerns..." className="bg-transparent border-b border-[var(--glass-border)] py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm placeholder:text-gray-600 resize-none"></textarea>
                        </div>

                        <div className="flex items-center gap-3 mt-2">
                            <input type="checkbox" id="terms" className="accent-[var(--primary)] w-4 h-4 cursor-pointer" />
                            <label htmlFor="terms" className="text-xs text-[var(--text-gray)] cursor-pointer">I agree to the cancellation policy.</label>
                        </div>

                        <button type="submit" className="w-full mt-4 py-4 bg-[var(--primary)] text-black font-bold uppercase tracking-[0.15em] text-xs rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
                            Confirm Reservation
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Booking;
