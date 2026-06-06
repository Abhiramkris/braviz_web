import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-impact text-5xl mb-8 text-[#263985] uppercase tracking-wider">Braviz Insights | Industrial News</h1>
            <p className="text-xl text-slate-600 mb-16 font-montserrat max-w-3xl">Latest news, technical guides, and articles from our industry experts on general contracting, equipment rentals, and IT solutions in Saudi Arabia.</p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map(blog => (
                    <Link to={'/blog/' + blog.slug} key={blog.id} className="group flex flex-col bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="p-8 flex flex-col flex-grow">
                            <span className="text-[#3A968F] text-xs font-bold tracking-widest uppercase mb-3 block">{blog.date}</span>
                            <h3 className="font-impact text-2xl text-[#263985] mb-4 group-hover:text-[#3A968F] transition-colors leading-tight">{blog.title}</h3>
                            <p className="text-slate-600 font-montserrat text-sm leading-relaxed mb-6 flex-grow">{blog.excerpt}</p>
                            <span className="text-[#263985] font-semibold text-sm font-inter group-hover:underline inline-flex items-center">
                                Read Article <span className="ml-1 text-lg leading-none">&rarr;</span>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
