import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OurCommitment = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact?subject=' + encodeURIComponent('Inquiry regarding Our Commitment & Vision 2030'));
    };

    return (
        <section className="w-full bg-[#263985] py-24 sm:py-32 relative overflow-hidden">
            {/* Background design elements to give it a premium feel */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888081696-26e95c1a84f5?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-luminosity"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3A968F]/20 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#263985] via-transparent to-[#263985]/80 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-[#3A968F] font-inter font-bold text-sm tracking-widest uppercase mb-4 block drop-shadow-md">Our Commitment</span>

                    <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-tight font-inter">
                        Delivering measurable value through disciplined execution.
                    </h2>

                    <div className="w-24 h-1 bg-[#3A968F] mx-auto mb-8 rounded-full"></div>

                    <p className="text-slate-300 font-inter text-lg md:text-xl leading-relaxed mb-12">
                        Braviz is committed to delivering measurable value through strict safety compliance, and dependable service delivery. We align our operations with Saudi Vision 2030 industrial growth objectives by supporting sustainable, efficient, and performance-driven project environments.
                    </p>

                    <button
                        onClick={handleContactClick}
                        className="bg-white text-[#263985] px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-[0_0_30px_rgba(58,150,143,0.3)] hover:shadow-[0_0_40px_rgba(58,150,143,0.5)] hover:-translate-y-1 font-inter inline-flex items-center gap-2"
                    >
                        Partner With Us
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default OurCommitment;
