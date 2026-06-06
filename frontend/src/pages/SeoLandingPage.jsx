import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import { seoPages } from '../data/seoPages';

const SeoLandingPage = () => {
    const { slug } = useParams();
    
    // Find the matching SEO page configuration based on the URL slug
    const matchedPage = seoPages.find(page => page.slug === slug);

    // If a match is found, render the LandingPage with the custom heroTitle
    if (matchedPage) {
        return <LandingPage heroTitle={matchedPage.heroTitle} />;
    }

    // If no match is found, fallback/redirect to the standard homepage
    return <Navigate to="/" replace />;
};

export default SeoLandingPage;
