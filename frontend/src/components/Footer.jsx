import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-impact tracking-wide mb-6">Contact Us</h3>
                        <div className="space-y-4 text-slate-300">
                            <p className="flex items-start">
                                <span className="font-semibold text-white mr-2">Address:</span>
                                <span>
                                    Building No. 7334, King Fahad Ibn Abdulaziz Saud, <br />
                                    Secondary No. 5423, Al Hizam Adh Dhahabi Dist. <br />
                                    Postal Code 34432, Al Khobar, Saudi Arabia
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="h-64 md:h-full min-h-[250px] rounded-lg overflow-hidden border border-slate-700 shadow-xl">
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
                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Braviz. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
