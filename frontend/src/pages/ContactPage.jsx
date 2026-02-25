import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const location = useLocation();
    const [defaultSubject, setDefaultSubject] = useState('');

    useEffect(() => {
        // Parse the query string to check for a "subject" parameter
        const searchParams = new URLSearchParams(location.search);
        const subjectParam = searchParams.get('subject');

        if (subjectParam) {
            // Decode the URI component to handle spaces and special characters
            setDefaultSubject(decodeURIComponent(subjectParam));
        }
    }, [location.search]);

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3A968F]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#263985]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#3A968F] font-inter font-bold text-sm tracking-widest uppercase mb-3 block">Get In Touch</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-impact text-[#263985] tracking-wide mb-6">
                            Contact Braviz
                        </h1>
                        <p className="text-slate-600 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
                            Whether you need general contracting, specialized industrial equipment, or IT infrastructure, our team is ready to deliver measurable value to your operations.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <ContactForm defaultSubject={defaultSubject} />
                </motion.div>

                {/* Contact Info Cards underneath */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-50 text-[#263985] rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1 font-inter">Phone</h4>
                        <p className="text-slate-500 font-inter text-sm">+966 12 345 6789</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-50 text-[#263985] rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1 font-inter">Email</h4>
                        <p className="text-slate-500 font-inter text-sm">info@braviz.com.sa</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-50 text-[#263985] rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1 font-inter">Headquarters</h4>
                        <p className="text-slate-500 font-inter text-sm leading-tight">Al Jubail Industrial City,<br />Saudi Arabia</p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default ContactPage;
