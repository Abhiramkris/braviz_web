import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3">
                           <h2 className="text-3xl font-impact tracking-widest text-white">BRAVIZ</h2>
                        </Link>
                        <p className="text-slate-400 font-inter text-sm leading-relaxed">
                            Delivering excellence in general contracting, specialized industrial equipment, and innovative IT infrastructure solutions across the Kingdom of Saudi Arabia.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-impact tracking-wide mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-slate-400 hover:text-[#3A968F] transition-colors text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3A968F]"></span> Home
                                </Link>
                            </li>
                            <li>
                                <a href="/#services" className="text-slate-400 hover:text-[#3A968F] transition-colors text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3A968F]"></span> Services
                                </a>
                            </li>
                            <li>
                                <Link to="/blog" className="text-slate-400 hover:text-[#3A968F] transition-colors text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3A968F]"></span> Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-slate-400 hover:text-[#3A968F] transition-colors text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3A968F]"></span> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-xl font-impact tracking-wide mb-6 text-white">Contact Us</h3>
                        <div className="space-y-4 text-slate-400 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#3A968F] shrink-0 mt-0.5" />
                                <span>
                                    Building No. 7334, King Fahad Ibn Abdulaziz Saud,<br />
                                    Secondary No. 5423, Al Hizam Adh Dhahabi Dist.<br />
                                    Postal Code 34432, Al Khobar, Saudi Arabia
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#3A968F] shrink-0" />
                                <span>+966 54 937 8484</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#3A968F] shrink-0" />
                                <a href="mailto:sales@bravizsa.com" className="hover:text-[#3A968F] transition-colors">sales@bravizsa.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Map */}
                    <div className="h-48 lg:h-full min-h-[200px] rounded-lg overflow-hidden border border-slate-700 shadow-xl">
                        <iframe
                            title="Braviz Location"
                            src="https://maps.google.com/maps?q=Building%20No.%207334,%20King%20Fahad%20Ibn%20Abdulaziz%20Saud,%20Secondary%20No.%205423,%20Al%20Hizam%20Adh%20Dhahabi%20Dist.%20Postal%20Code%2034432,%20Al%20khobar,%20Saudi%20Arabia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Braviz. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
