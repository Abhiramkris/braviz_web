import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl border-l-[8px] border-[#263985] pl-6 sm:pl-10"
                >
                    <h2 className="font-impact text-4xl md:text-5xl text-[#263985] uppercase tracking-wider mb-6">
                        About Braviz Industrial Contracting
                    </h2>
                    
                    <div className="space-y-6 font-montserrat text-lg text-slate-700 leading-relaxed">
                        <p>
                            <strong>Braviz</strong> is an elite industrial contracting company providing robust engineering, heavy equipment rental, piping fabrication, and infrastructure solutions across Saudi Arabia. We are a dedicated business-to-business (B2B) enterprise built to support the rigorous demands of the Oil & Gas, Petrochemical, and Civil Construction sectors.
                        </p>
                        <p>
                            By delivering comprehensive, multidisciplinary services from highly technical IT networking to large-scale industrial scaffolding, Braviz establishes itself as a foundational partner for major industrial projects in the KSA region.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
