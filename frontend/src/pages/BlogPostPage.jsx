import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';

const BlogPostPage = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    
    // Find metadata
    const blogMeta = blogs.find(b => b.slug === slug);

    useEffect(() => {
        if (!blogMeta) {
            setLoading(false);
            return;
        }

        // Fetch the raw .md file from the public folder
        fetch('/blogs/' + slug + '.md')
            .then(res => {
                if (!res.ok) throw new Error('Failed to load markdown');
                return res.text();
            })
            .then(text => {
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [slug, blogMeta]);

    // Inject Schema on mount
    useEffect(() => {
        if (!blogMeta) return;

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blogMeta.title,
            "description": blogMeta.excerpt,
            "author": {
                "@type": "Organization",
                "name": blogMeta.author
            },
            "publisher": {
                "@type": "Organization",
                "name": "Braviz Industrial Contracting",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://bravizsa.com/assets/Group_45.png"
                }
            },
            "datePublished": blogMeta.date,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://bravizsa.com/blog/" + blogMeta.slug
            }
        });

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [blogMeta]);

    if (!blogMeta && !loading) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
                <div className="animate-pulse space-y-4">
                    <div className="h-8 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/4 mb-12"></div>
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                </div>
            ) : (
                <article className="prose prose-slate lg:prose-lg mx-auto prose-headings:font-impact prose-headings:text-[#263985] prose-a:text-[#3A968F]">
                    <div className="mb-8 border-b pb-8">
                        <span className="text-[#3A968F] font-semibold tracking-wider uppercase text-sm mb-2 block">{blogMeta.date}</span>
                        <h1 className="font-impact text-4xl md:text-5xl text-[#263985] uppercase tracking-wider mb-4 leading-tight">
                            {blogMeta.title}
                        </h1>
                        <p className="text-lg text-slate-500 font-medium">By {blogMeta.author}</p>
                    </div>
                    
                    <div className="font-montserrat text-slate-700 leading-relaxed space-y-6">
                        <ReactMarkdown>{content.replace('# ' + blogMeta.title, '')}</ReactMarkdown>
                    </div>
                </article>
            )}
        </div>
    );
};

export default BlogPostPage;
