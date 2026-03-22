import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, ArrowRight, Wallet, CheckCircle2, QrCode, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: {
        name: string;
        price: string;
    } | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, plan }) => {
    const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');
    const [selectedMethod, setSelectedMethod] = useState<'card' | 'upi' | 'wallet' | 'qr'>('card');

    const handlePayment = () => {
        setStep('processing');
        // Simulate payment processing
        setTimeout(() => {
            setStep('success');
        }, 2500);
    };

    const handleClose = () => {
        onClose();
        // Reset state after animation finishes
        setTimeout(() => {
            setStep('details');
        }, 500);
    };

    if (!plan) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    />
                    <motion.div
                        className="relative w-full max-w-lg bg-[var(--bg-darker)] glass-panel rounded-3xl p-8 border border-[var(--glass-border)] shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {step !== 'processing' && (
                            <button className="absolute top-6 right-6 text-[var(--text-gray)] hover:text-white transition-colors" onClick={handleClose}>
                                <X size={24} />
                            </button>
                        )}

                        {step === 'details' && (
                            <div className="flex flex-col gap-6">
                                <div className="text-center mb-2">
                                    <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-2 tracking-wide">Checkout</h2>
                                    <p className="text-[var(--text-gray)] font-light text-sm">Secure your premium grooming session</p>
                                </div>

                                <div className="flex justify-between items-center bg-[rgba(242,201,76,0.05)] border border-[var(--primary)] rounded-2xl p-6">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] mb-1">Selected Plan</span>
                                        <h3 className="text-xl font-['Playfair_Display'] text-white font-bold">{plan.name} Package</h3>
                                    </div>
                                    <div className="text-2xl font-bold text-[var(--primary)] text-right">
                                        {plan.price}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1 block mb-3">Payment Method</label>
                                    <div className="grid grid-cols-4 gap-3">
                                        {[
                                            { id: 'card', icon: CreditCard, label: 'Card' },
                                            { id: 'upi', icon: Smartphone, label: 'UPI' },
                                            { id: 'qr', icon: QrCode, label: 'QR Code' },
                                            { id: 'wallet', icon: Wallet, label: 'Wallet' }
                                        ].map(method => (
                                            <div
                                                key={method.id}
                                                className={`flex flex-col items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all duration-300 ${selectedMethod === method.id ? 'bg-[rgba(242,201,76,0.1)] border-[var(--primary)] text-[var(--primary)]' : 'bg-transparent border-[var(--glass-border)] text-[var(--text-gray)] hover:bg-[rgba(255,255,255,0.02)]'}`}
                                                onClick={() => setSelectedMethod(method.id as any)}
                                            >
                                                <method.icon size={20} />
                                                <span className="text-xs font-medium">{method.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {selectedMethod === 'card' && (
                                    <div className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-5 border border-[var(--glass-border)]">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1">Card Number</label>
                                                <input type="text" placeholder="×××× ×××× ×××× ××××" className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm font-mono tracking-widest placeholder:text-gray-600" maxLength={19} />
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex-1 flex flex-col gap-1.5">
                                                    <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1">Expiry</label>
                                                    <input type="text" placeholder="MM/YY" className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm font-mono tracking-widest placeholder:text-gray-600" maxLength={5} />
                                                </div>
                                                <div className="flex-1 flex flex-col gap-1.5">
                                                    <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1">CVV</label>
                                                    <input type="text" placeholder="×××" className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm font-mono tracking-widest placeholder:text-gray-600" maxLength={3} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {selectedMethod === 'upi' && (
                                    <div className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-5 border border-[var(--glass-border)]">
                                        <div className="flex flex-col gap-1.5 mb-3">
                                            <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1">UPI ID / VPA</label>
                                            <input type="text" placeholder="yourname@bankName" className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm placeholder:text-gray-600" />
                                        </div>
                                        <p className="text-[var(--text-gray)] text-xs text-center font-light">A payment request will be sent to your UPI app</p>
                                    </div>
                                )}

                                {selectedMethod === 'qr' && (
                                    <div className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-6 border border-[var(--glass-border)] flex flex-col items-center">
                                        <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center mb-4 relative">
                                            <QrCode size={120} color="#000" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-white p-1 rounded-full text-black font-bold border border-gray-200">
                                                    ₹
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[var(--text-gray)] text-sm font-light">Scan with any UPI app to pay</p>
                                    </div>
                                )}

                                {selectedMethod === 'wallet' && (
                                    <div className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-5 border border-[var(--glass-border)] flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[rgba(242,201,76,0.1)] flex items-center justify-center border border-[rgba(242,201,76,0.2)]">
                                                <Wallet size={20} color="var(--primary)" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)]">Available Balance</span>
                                                <span className="text-white font-bold tracking-wider">₹45,250.00</span>
                                            </div>
                                        </div>
                                        <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                                            Active & Ready
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <ShieldCheck size={16} color="#4CAF50" />
                                    <span className="text-[var(--text-gray)] text-xs font-semibold uppercase tracking-wider">Encrypted & Secure Payment</span>
                                </div>

                                <button className="w-full mt-2 flex items-center justify-center gap-2 py-4 bg-[var(--primary)] text-black font-bold uppercase tracking-[0.15em] text-sm rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300" onClick={handlePayment}>
                                    Confirm & Pay {plan.price} <ArrowRight size={18} />
                                </button>
                            </div>
                        )}

                        {step === 'processing' && (
                            <div className="py-16 flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 rounded-full border-4 border-[rgba(242,201,76,0.2)] border-t-[var(--primary)] animate-spin mb-8"></div>
                                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-white mb-2">Processing Your Payment</h3>
                                <p className="text-[var(--text-gray)] font-light text-sm">Please do not close this window</p>
                            </div>
                        )}

                        {step === 'success' && (
                            <div className="py-10 flex flex-col items-center justify-center text-center">
                                <motion.div
                                    className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mb-6"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                                >
                                    <CheckCircle2 size={60} color="#4CAF50" />
                                </motion.div>
                                <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-3">Payment Successful!</h2>
                                <p className="text-[var(--text-gray)] font-light mb-8 max-w-[250px]">Your <strong className="text-white">{plan.name}</strong> session has been secured.</p>
                                
                                <div className="w-full h-[1px] bg-[var(--glass-border)] mb-8"></div>
                                
                                <button className="w-full py-4 glass-panel border border-[var(--glass-border)] text-white hover:bg-white/10 font-bold uppercase tracking-[0.15em] text-sm rounded-xl transition-all duration-300" onClick={handleClose}>
                                    Great, Thanks!
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PaymentModal;
