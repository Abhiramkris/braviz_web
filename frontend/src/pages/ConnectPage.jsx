import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Copy, Check, ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import logo from '../assets/logo_only.png';

const ConnectPage = () => {
    const [copiedEmail, setCopiedEmail] = useState(null);

    const handleCopy = (email, type) => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(type);
        setTimeout(() => {
            setCopiedEmail(null);
        }, 2000);
    };

    return (
        <main className="min-h-screen bg-slate-50 pt-28 pb-20 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] rounded-full bg-[#263985]/8 blur-[120px] z-0 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[#3A968F]/12 blur-[120px] z-0 pointer-events-none" />

            <div className="max-w-3xl w-full px-4 sm:px-6 relative z-10 flex flex-col items-center">
                {/* Back to Home Link */}
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="self-start mb-6"
                >
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-braviz-blue font-inter font-semibold transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Main Glassmorphic Card */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full bg-white/70 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl shadow-slate-200/80 p-6 sm:p-10 md:p-12 relative"
                >
                    {/* Active Status Badge */}
                    <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-bold font-inter text-emerald-700 tracking-wider uppercase">Direct Lines Active</span>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-10">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mb-5"
                        >
                            <img src={logo} alt="Braviz Logo" className="h-14 w-auto object-contain" />
                        </motion.div>

                        <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#263985] text-[10px] font-bold font-inter tracking-widest uppercase shadow-sm">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#3A968F]" /> Verified Contact
                            </span>
                            {/* Mobile status indicator */}
                            <div className="flex sm:hidden items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[9px] font-bold font-inter text-emerald-700 uppercase">Active</span>
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-impact tracking-wide mb-3 bg-gradient-to-r from-braviz-blue to-[#3A968F] bg-clip-text text-transparent">
                            CONNECT WITH BRAVIZ
                        </h1>
                        <p className="text-slate-600 font-inter text-sm sm:text-base max-w-md leading-relaxed">
                            Connect with us instantly. Click below to start a direct call or send a request to our departments.
                        </p>
                    </div>

                    {/* Phone Section (Primary Action) */}
                    <div className="mb-8">
                        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 font-inter">Direct Phone Line</h2>
                        
                        <motion.a
                            href="tel:+966549378484"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.99 }}
                            className="relative overflow-hidden w-full flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-braviz-blue to-[#3A968F] text-white shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 group"
                        >
                            {/* Reflection Sweep Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                            
                            {/* Left Panel: Icon & Details */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left z-10">
                                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center border border-white/20 shadow-inner shrink-0 group-hover:scale-105 transition-transform duration-300">
                                    <Phone className="w-6 h-6 text-white fill-white/10 animate-pulse" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold font-inter tracking-wider text-blue-200/90 uppercase block">Sales & Support Hotline</span>
                                    <span className="text-xl sm:text-2xl font-bold font-inter tracking-wide mt-1 block whitespace-nowrap text-white">
                                        +966 54 937 8484
                                    </span>
                                </div>
                            </div>
                            
                            {/* Right Panel: CTA Button */}
                            <div className="mt-5 md:mt-0 w-full md:w-auto px-5 py-2.5 bg-white text-braviz-blue rounded-xl font-bold font-inter text-sm shadow-md group-hover:bg-slate-50 transition-all duration-200 z-10 flex items-center justify-center gap-1.5 hover:scale-[1.03]">
                                Call Now
                                <ExternalLink className="w-4 h-4" />
                            </div>
                        </motion.a>
                    </div>

                    {/* Email Sections */}
                    <div>
                        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 font-inter">Direct Email Contacts</h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Email 1: Sales */}
                            <motion.div 
                                whileHover={{ y: -2 }}
                                className="bg-white/80 border border-slate-100 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 relative group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-braviz-blue border border-slate-200/50 group-hover:bg-blue-50 group-hover:text-braviz-blue transition-colors duration-300">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <button 
                                        onClick={() => handleCopy('sales@bravizsa.com', 'sales')}
                                        className="text-slate-400 hover:text-braviz-blue p-1.5 rounded-lg hover:bg-slate-50 transition-colors relative"
                                        title="Copy email address"
                                    >
                                        <AnimatePresence mode="wait">
                                            {copiedEmail === 'sales' ? (
                                                <motion.div
                                                    key="check"
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.8, opacity: 0 }}
                                                    transition={{ duration: 0.15 }}
                                                >
                                                    <Check className="w-4 h-4 text-[#3A968F]" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="copy"
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.8, opacity: 0 }}
                                                    transition={{ duration: 0.15 }}
                                                >
                                                    <Copy className="w-4 h-4" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                </div>
                                <div>
                                    <span className="inline-block text-[9px] font-bold text-[#3A968F] bg-teal-50 px-2 py-0.5 rounded-md mb-2 tracking-wider uppercase font-inter border border-teal-100/50">Sales & Inquiries</span>
                                    <h3 className="font-bold text-slate-800 text-sm font-inter">Sales Department</h3>
                                    <p className="text-slate-400 text-[11px] font-inter mb-3 leading-relaxed">For business relations and general contracting</p>
                                    <a 
                                        href="mailto:sales@bravizsa.com" 
                                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-braviz-blue hover:text-[#3A968F] font-inter transition-colors"
                                    >
                                        sales@bravizsa.com
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </motion.div>

                            {/* Email 2: Shabeer */}
                            <motion.div 
                                whileHover={{ y: -2 }}
                                className="bg-white/80 border border-slate-100 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 relative group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-braviz-blue border border-slate-200/50 group-hover:bg-blue-50 group-hover:text-braviz-blue transition-colors duration-300">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <button 
                                        onClick={() => handleCopy('shabeer@bravizsa.com', 'shabeer')}
                                        className="text-slate-400 hover:text-braviz-blue p-1.5 rounded-lg hover:bg-slate-50 transition-colors relative"
                                        title="Copy email address"
                                    >
                                        <AnimatePresence mode="wait">
                                            {copiedEmail === 'shabeer' ? (
                                                <motion.div
                                                    key="check"
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.8, opacity: 0 }}
                                                    transition={{ duration: 0.15 }}
                                                >
                                                    <Check className="w-4 h-4 text-[#3A968F]" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="copy"
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.8, opacity: 0 }}
                                                    transition={{ duration: 0.15 }}
                                                >
                                                    <Copy className="w-4 h-4" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                </div>
                                <div>
                                    <span className="inline-block text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md mb-2 tracking-wider uppercase font-inter border border-amber-100/50">Direct Desk</span>
                                    <h3 className="font-bold text-slate-800 text-sm font-inter">Direct Contact</h3>
                                    <p className="text-slate-400 text-[11px] font-inter mb-3 leading-relaxed">For escalations and direct executive communication</p>
                                    <a 
                                        href="mailto:shabeer@bravizsa.com" 
                                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-braviz-blue hover:text-[#3A968F] font-inter transition-colors"
                                    >
                                        shabeer@bravizsa.com
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xs text-slate-400 font-inter mt-6"
                >
                    &copy; {new Date().getFullYear()} Braviz. All rights reserved. Registered in Saudi Arabia.
                </motion.p>
            </div>
        </main>
    );
};

export default ConnectPage;
