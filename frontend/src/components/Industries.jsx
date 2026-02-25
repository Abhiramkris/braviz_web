import React from 'react';
import { motion } from 'framer-motion';

const industries = [
    {
        id: 1,
        title: "Oil & Gas",
        description: "Supporting upstream, midstream, and downstream operations with critical infrastructure and logistical excellence across Saudi Arabia.",
        image: "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Petrochemical & Process Plants",
        description: "Delivering specialized maintenance, fabrication, and thermal insulation services to the region's largest petrochemical facilities.",
        image: "https://images.unsplash.com/photo-1584060330377-3fd93ef4e991?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Industrial Manufacturing",
        description: "Providing certified material supply and equipment rentals to keep complex manufacturing and assembly lines running smoothly.",
        image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Infrastructure Development",
        description: "Partnering in the Kingdom's visionary expansion by executing complex civil contracting and site readiness projects.",
        image: "https://images.unsplash.com/photo-1599995903128-531fc7fb694b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "Energy & Utilities",
        description: "Building the backbone of modern energy grids with state-of-the-art networking, surveillance, and IT infrastructure solutions.",
        image: "https://images.unsplash.com/photo-1578776349090-de61da00ff1a?auto=format&fit=crop&q=80&w=800"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Industries = () => {
    return (
        <section className="w-full bg-slate-50 py-24 sm:py-32 font-inter relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3A968F]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#263985]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#3A968F] font-inter font-bold text-sm tracking-widest uppercase mb-3 block">Expertise Areas</span>
                    <h2 className="text-4xl md:text-5xl font-impact text-[#263985] tracking-wide mb-6">
                        Industries We Serve
                    </h2>
                    <p className="text-slate-600 font-inter text-lg max-w-2xl mx-auto">
                        Focused on excellence and reliability, we provide dedicated multidisciplinary solutions to the core industrial sectors driving Saudi Arabia forward.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.id}
                            variants={cardVariants}
                            /* The 4th and 5th items can span wider or just fit the grid naturally, 
                               but grid-cols-3 with 5 items will leave the last row with 2 centered-ish items if we flex it. 
                               For simplicity, we'll let CSS Grid handle it natively, but span the last two across md screens nicely */
                            className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/40 backdrop-blur-md border border-white/60 ${index === 3 ? 'md:col-span-1 lg:col-span-1 lg:col-start-2' : ''} ${index === 4 ? 'md:col-span-1 lg:col-span-1' : ''}`}
                        >
                            {/* Image Container */}
                            <div className="w-full h-56 md:h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-4 left-6 right-6 z-20">
                                    <h3 className="text-xl md:text-2xl text-white font-bold leading-tight drop-shadow-md tracking-wide">
                                        {industry.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Glossy Content Container */}
                            <div className="p-6 md:p-8 bg-white/30 backdrop-blur-md relative z-20 h-full border-t border-white/40">
                                <p className="text-slate-700 font-medium leading-relaxed font-inter">
                                    {industry.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Industries;
