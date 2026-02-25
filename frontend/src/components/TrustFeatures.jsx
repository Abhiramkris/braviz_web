import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        id: 1,
        tabName: "General Contracting",
        title: "End-to-end execution at industrial speed",
        description: "Move beyond standard contracting with our comprehensive site execution, certified materials supply, and project coordination aligned with Saudi industrial standards.",
        image: "/assets/service_1.png",
        buttonText: "Explore Contracting"
    },
    {
        id: 2,
        tabName: "Equipment Rentals",
        title: "Heavy-duty machinery for rapid deployment",
        description: "Reliable rental and leasing solutions for heavy machinery, lifting equipment, and transport fleets with complete operational support.",
        image: "/assets/service_2.png",
        buttonText: "Discover Rentals"
    },
    {
        id: 3,
        tabName: "IT Networking",
        title: "Secure infrastructure for complex environments",
        description: "Structured cabling, secure infrastructure, surveillance systems, and integrated IT solutions tailored for demanding industrial sites.",
        image: "/assets/service_3.png",
        buttonText: "Discover IT Solutions"
    },
    {
        id: 4,
        tabName: "Industrial Piping",
        title: "Precision fabrication & thermal insulation",
        description: "Mechanical installations, shutdown support, thermal insulation, and precision piping fabrication & testing by certified experts.",
        image: "/assets/service_4.png",
        buttonText: "Explore Piping"
    }
];

const TrustFeatures = () => {
    const [activeTab, setActiveTab] = useState(services[0].id);
    const navigate = useNavigate();

    const activeService = services.find(s => s.id === activeTab);

    return (
        <section className="w-full bg-slate-50 py-24 sm:py-32 font-inter overflow-hidden relative" id="services">
            {/* Subtle background glow mimicking the reference image but for light mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#3A968F]/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

                <h2 className="text-3xl md:text-5xl font-medium text-[#263985] text-center mb-12 max-w-4xl leading-tight font-inter">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block"
                        >
                            Would you like to know more about <br className="hidden md:block" /> {activeService.tabName}?
                        </motion.span>
                    </AnimatePresence>
                </h2>

                {/* Scrollable Tab Bar */}
                <div className="flex bg-white/80 max-w-full overflow-x-auto rounded-full p-2 mb-16 border border-slate-200 shadow-sm backdrop-blur-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="flex items-center gap-2 min-w-max">
                        {services.map(s => (
                            <button
                                key={s.id}
                                onClick={() => setActiveTab(s.id)}
                                className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 font-inter ${activeTab === s.id ? 'bg-[#263985] text-white shadow-md shadow-[#263985]/20' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
                            >
                                {s.tabName}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content Area */}
                <div className="w-full relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex flex-col w-full"
                        >
                            {/* Large Image Container */}
                            <div className="w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl relative mb-12 bg-white group max-w-5xl mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-black/5 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                                <img
                                    src={activeService.image}
                                    alt={activeService.title}
                                    className="w-full h-[30vh] md:h-[50vh] object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Bottom Content Area */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 px-2 md:px-8">
                                <div className="flex flex-col max-w-3xl">
                                    <h3 className="text-3xl md:text-5xl text-slate-900 font-medium mb-4 tracking-tight leading-tight font-inter">
                                        {activeService.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl font-inter">
                                        {activeService.description}
                                    </p>
                                </div>

                                <button
                                    onClick={() => navigate(`/contact?subject=${encodeURIComponent(activeService.title)}`)}
                                    className="flex-shrink-0 bg-[#263985] text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-[#1a275c] transition-colors duration-300 w-full md:w-auto text-center mt-4 md:mt-0 font-inter shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    {activeService.buttonText}
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default TrustFeatures;
