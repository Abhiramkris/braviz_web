import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-8 flex-shrink-0">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl border-l-[12px] border-[#3A968F] pl-8 mb-8"
            >
                <h1 className="font-impact text-5xl md:text-6xl lg:text-7xl text-[#263985] uppercase tracking-wider leading-[0.95]">
                    Excellence<br />
                    Across<br />
                    Solutions
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="max-w-2xl pl-8 mb-10"
            >
                <p className="font-montserrat text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                    We deliver multidisciplinary solutions across General Contracting, Industrial Trading, Equipment Rentals, and Communication & Networking for the Oil & Gas sector.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="pl-8 flex flex-wrap gap-4"
            >
                <button
                    onClick={() => navigate('/contact?subject=General Inquiry')}
                    className="bg-[#263985] text-white px-10 py-4 font-bold text-lg tracking-wider uppercase transition-all hover:bg-[#1a275c] shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    Explore
                </button>
                <button
                    onClick={() => navigate('/contact?subject=Contact Request')}
                    className="bg-white border-[3px] border-[#3A968F] text-[#3A968F] px-10 py-4 font-bold text-lg tracking-wider uppercase transition-all hover:bg-[#3A968F] hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    Contact Us
                </button>
            </motion.div>
        </div >
    );
};

export default Hero;
