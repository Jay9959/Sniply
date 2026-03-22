import React, { useState } from 'react';
import { X, User, Mail, LogOut, Save, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccountModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogout: () => void;
    user: {
        name: string;
        email: string;
    };
    onUpdateUser: (newName: string) => void;
}

const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose, onLogout, user, onUpdateUser }) => {
    const [newName, setNewName] = useState(user.name);
    const [isEditing, setIsEditing] = useState(false);

    React.useEffect(() => {
        setNewName(user.name);
    }, [user.name, isOpen]);

    const handleSave = () => {
        onUpdateUser(newName);
        setIsEditing(false);
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
                        onClick={onClose}
                    />
                    <motion.div
                        className="relative w-full max-w-md bg-[var(--bg-darker)] glass-panel rounded-3xl p-8 border border-[var(--glass-border)] shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-[var(--primary)] blur-[80px] opacity-20 pointer-events-none rounded-full"></div>

                        <button className="absolute top-6 right-6 text-[var(--text-gray)] hover:text-white transition-colors" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-20 h-20 mx-auto bg-[rgba(242,201,76,0.1)] rounded-full flex items-center justify-center mb-6 border border-[rgba(242,201,76,0.2)]">
                                <User size={40} color="var(--primary)" />
                            </div>
                            <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-2 tracking-wide">
                                Your Account
                            </h2>
                            <p className="text-[var(--text-gray)] font-light text-sm">
                                Manage your profile and settings
                            </p>
                        </div>

                        <div className="space-y-6 mb-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1">Full Name</label>
                                <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl p-1 relative min-h-[50px] flex items-center">
                                    {isEditing ? (
                                        <div className="flex w-full">
                                            <input
                                                type="text"
                                                value={newName}
                                                onChange={(e) => setNewName(e.target.value)}
                                                className="flex-1 bg-transparent text-white px-3 focus:outline-none text-sm"
                                                autoFocus
                                            />
                                            <button className="bg-[var(--primary)] text-black p-2 rounded-lg hover:bg-white transition-colors" onClick={handleSave}>
                                                <Save size={18} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex justify-between items-center w-full px-3">
                                            <span className="text-white text-sm">{user.name}</span>
                                            <button className="text-[var(--primary)] text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors" onClick={() => setIsEditing(true)}>
                                                Edit
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-gray)] pl-1">Email Address</label>
                                <div className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl py-3 px-4 flex items-center gap-3">
                                    <Mail size={18} className="text-[var(--text-gray)]" />
                                    <span className="text-white text-sm">{user.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors text-sm font-semibold uppercase tracking-wider" onClick={onLogout}>
                                <LogOut size={18} />
                                Sign Out
                            </button>
                        </div>

                        <div className="pt-6 border-t border-[var(--glass-border)] text-center flex flex-col items-center gap-2">
                            <Scissors size={20} color="rgba(242, 201, 76, 0.3)" />
                            <p className="text-[var(--text-gray)] text-xs uppercase tracking-widest font-semibold">Member Since 2026</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AccountModal;
