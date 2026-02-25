import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo_only.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-white/80 shadow-sm border-b border-slate-200' : 'bg-transparent border-b border-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                            <img src={logo} alt="Braviz Logo" className="h-12 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className="text-slate-800 hover:text-[#263985] font-impact tracking-wide px-3 py-2 text-lg transition-colors">Home</Link>
                            <a href="#services" className="text-slate-800 hover:text-[#263985] font-impact tracking-wide px-3 py-2 text-lg transition-colors">Services</a>
                            <Link to="/blog" className="text-slate-800 hover:text-[#263985] font-impact tracking-wide px-3 py-2 text-lg transition-colors">Blog</Link>
                            <Link to="/contact" className="text-slate-800 hover:text-[#263985] font-impact tracking-wide px-3 py-2 text-lg transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-800 hover:text-[#263985] focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full backdrop-blur-xl bg-white/95 border-b border-slate-200 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="text-slate-800 block px-3 py-2 rounded-md font-impact text-lg">Home</Link>
                        <a href="#services" className="text-slate-800 block px-3 py-2 rounded-md font-impact text-lg">Services</a>
                        <Link to="/blog" className="text-slate-800 block px-3 py-2 rounded-md font-impact text-lg">Blog</Link>
                        <Link to="/contact" className="text-slate-800 block px-3 py-2 rounded-md font-impact text-lg">Contact</Link>
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
