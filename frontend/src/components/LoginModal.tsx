import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, ArrowRight, Scissors, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginSuccess: (name: string, email: string) => void;
    canClose?: boolean;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess, canClose = true }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [fullName, setFullName] = useState('Alexander Knight');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setIsSignUp(false);
                setFullName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setError('');
            }, 300);
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (isSignUp) {
                if (password !== confirmPassword) {
                    setError("Passwords do not match!");
                    setIsLoading(false);
                    return;
                }
                const res = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: fullName || 'Valued Member', email, password })
                });
                
                const data = await res.json();
                if (!res.ok) throw new Error(data.message || 'Registration failed');
                
                onLoginSuccess(data.user.name, data.user.email);
                onClose();
            } else {
                if (email && password) {
                    const res = await fetch('http://localhost:5000/api/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password })
                    });
                    
                    const data = await res.json();
                    if (!res.ok) throw new Error(data.message || 'Login failed');
                    
                    onLoginSuccess(data.user.name, data.user.email);
                    onClose();
                }
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => canClose && onClose()}
                    />
                    
                    <motion.div
                        className="relative w-full max-w-md bg-[var(--bg-darker)] glass-panel rounded-3xl p-8 border border-[var(--glass-border)] shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-[var(--primary)] blur-[80px] opacity-20 pointer-events-none rounded-full"></div>

                        {canClose && (
                            <button className="absolute top-6 right-6 text-[var(--text-gray)] hover:text-white transition-colors" onClick={onClose}>
                                <X size={24} />
                            </button>
                        )}

                        <div className="text-center mb-8">
                            <div className="w-16 h-16 mx-auto bg-[rgba(242,201,76,0.1)] rounded-full flex items-center justify-center mb-6 border border-[rgba(242,201,76,0.2)]">
                                <Scissors size={28} color="var(--primary)" />
                            </div>
                            <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-2 tracking-wide">
                                {isSignUp ? 'Create Account' : 'Welcome Back'}
                            </h2>
                            <p className="text-[var(--text-gray)] font-light text-sm">
                                {isSignUp ? 'Join the SNIPLY elite community' : 'Enter your credentials to access your account'}
                            </p>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm mb-6 text-center font-medium">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <AnimatePresence mode="popLayout">
                                {isSignUp && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex flex-col gap-2 relative"
                                    >
                                        <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-gray)]" size={18} />
                                            <input
                                                type="text"
                                                placeholder="Alexander Knight"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                required
                                                className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm placeholder:text-gray-600"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-gray)]" size={18} />
                                    <input
                                        type="email"
                                        placeholder="concierge@sniply.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm placeholder:text-gray-600"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-gray)]" size={18} />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm placeholder:text-gray-600"
                                    />
                                </div>
                            </div>

                            <AnimatePresence mode="popLayout">
                                {isSignUp && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex flex-col gap-2"
                                    >
                                        <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1">Confirm Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-gray)]" size={18} />
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                                className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors text-sm placeholder:text-gray-600"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {!isSignUp && (
                                <div className="flex justify-between items-center text-xs text-[var(--text-gray)] font-light mt-1">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="accent-[var(--primary)] w-3.5 h-3.5" />
                                        <span>Remember Me</span>
                                    </label>
                                    <a href="#" className="hover:text-[var(--primary)] transition-colors">Forgot Password?</a>
                                </div>
                            )}

                            <button type="submit" disabled={isLoading} className="w-full mt-4 flex items-center justify-center gap-2 py-4 bg-[var(--primary)] text-black font-bold uppercase tracking-[0.15em] text-xs rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                                {isLoading ? 'Processing...' : (isSignUp ? 'Create Account' : 'Sign In')} {!isLoading && <ArrowRight size={16} />}
                            </button>
                        </form>

                        <div className="text-center mt-8 pt-6 border-t border-[var(--glass-border)]">
                            <p className="text-[var(--text-gray)] text-sm font-light">
                                {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                                <button
                                    className="text-white hover:text-[var(--primary)] font-medium transition-colors border-b border-transparent hover:border-[var(--primary)]"
                                    onClick={() => setIsSignUp(!isSignUp)}
                                >
                                    {isSignUp ? 'Sign In' : 'Create one'}
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
