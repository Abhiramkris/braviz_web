import React, { useState } from 'react';

const ContactForm = ({ defaultSubject = '' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: defaultSubject,
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation: Name is required, and either Email or Phone must be provided
        if (!formData.name) {
            alert('Please provide your name.');
            return;
        }
        if (!formData.email && !formData.phone) {
            alert('Please provide either an email address or a phone number so we can contact you.');
            return;
        }

        setStatus('submitting');

        try {
            // Vercel Serverless Function / Vite Local Proxy Endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', subject: defaultSubject, message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 text-green-800 p-8 rounded-2xl border border-green-200 text-center shadow-sm">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <h3 className="text-2xl font-bold mb-2 font-inter">Thank You!</h3>
                <p className="font-inter">Your message has been sent successfully. We will get back to you shortly.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-slate-100 font-inter">
            <div className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#3A968F] focus:border-[#3A968F] outline-none transition-all placeholder:text-slate-400"
                        placeholder="John Doe"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#3A968F] focus:border-[#3A968F] outline-none transition-all placeholder:text-slate-400"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#3A968F] focus:border-[#3A968F] outline-none transition-all placeholder:text-slate-400"
                            placeholder="+966 5X XXX XXXX"
                        />
                    </div>
                </div>
                <p className="text-xs text-slate-500 mt-[-1rem] block w-full">Please provide either an Email or Phone number.</p>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#3A968F] focus:border-[#3A968F] outline-none transition-all placeholder:text-slate-400"
                        placeholder="How can we help?"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#3A968F] focus:border-[#3A968F] outline-none transition-all placeholder:text-slate-400 resize-none"
                        placeholder="Tell us about your project requirements..."
                    ></textarea>
                </div>

                {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                        There was an error sending your message. Please try again later or contact us directly.
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 rounded-full font-bold text-white transition-all shadow-lg hover:shadow-xl ${status === 'submitting' ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#263985] hover:bg-[#1a275c] hover:-translate-y-1'}`}
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
