import React from 'react';

const BlogPage = () => {
    return (
        <div className="pt-24 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-impact text-5xl mb-8 text-[var(--color-braviz-blue)]">Braviz Insights</h1>
            <p className="text-lg text-slate-600 mb-12">Latest news and articles from our industry experts.</p>

            {/* Blog list dummy data for now */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-slate-200 w-full animate-pulse"></div>
                    <div className="p-6">
                        <h3 className="font-impact text-2xl mb-2">The Future of Oil & Gas</h3>
                        <p className="text-slate-600 line-clamp-3">Explore the emerging technologies shaping the industrial applications of tomorrow...</p>
                        <button className="mt-4 text-[#263985] font-semibold hover:underline">Read more &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
