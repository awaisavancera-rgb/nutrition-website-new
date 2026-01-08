"use client";

import React, { useState, useEffect } from 'react';
import styles from './FeaturedPromoSection.module.css';
import { ShimmerButton } from './ui/shimmer-button';
import productsData from '../data/products.json';

const FeaturedPromoSection: React.FC = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Select 3 products for the slider
    const featuredProducts = productsData.slice(0, 3);
    const SLIDE_DURATION = 5000; // 5 seconds per slide

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, SLIDE_DURATION);

        return () => clearInterval(timer);
    }, [currentIdx]);

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIdx((prev) => (prev + 1) % featuredProducts.length);
            setIsAnimating(false);
        }, 500); // Match CSS transition duration
    };

    const currentProduct = featuredProducts[currentIdx];

    return (
        <section className={styles.promoSection}>
            <div className={styles.bannerCanvas}>
                {/* Background Decorations */}
                <div className={`${styles.shape} ${styles.shape1}`}></div>
                <div className={`${styles.shape} ${styles.shape2}`}></div>

                <div className={styles.contentWrapper}>

                    {/* Top Section */}
                    <div className={styles.topSection}>
                        {/* Brand Info */}
                        <div className={styles.brandInfo}>
                            <h2 className={styles.brandTitle}>
                                Vitamins <br /> from <span className={styles.brandHighlight}>nutrio</span>
                            </h2>
                            <p className={styles.brandDescription}>
                                We understand how important it is to maintain health in the modern rhythm of life.
                            </p>
                        </div>

                        {/* Hero Text & CTA */}
                        <div className={styles.heroArea}>
                            <h1 className={styles.heroText}>
                                We are here to support you on your path to a <span className={styles.italicText}>healthy lifestyle</span>
                            </h1>

                            <div className={styles.ctaWrapper}>
                                <ShimmerButton className={styles.ctaButton}>
                                    Go to shop
                                    <svg className={styles.ctaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </ShimmerButton>

                                {/* Minimal Arrow Decoration */}
                                <div className={styles.arrowDecoration}>
                                    <div className={styles.arrowLine}></div>
                                    <div className={styles.arrowDot}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className={styles.bottomSection}>

                        {/* Product Slider Card */}
                        <div className={styles.sliderContainer}>
                            <div className={`${styles.glassCard} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
                                {/* Left Side: Image */}
                                <div className={styles.productVisual}>
                                    <img
                                        src={currentProduct.image}
                                        alt={currentProduct.name}
                                        className={styles.actualProductImage}
                                    />
                                </div>

                                {/* Right Side: Details */}
                                <div className={styles.cardDetails}>
                                    <div>
                                        <span className={styles.cardBadge}>Featured Product</span>
                                        <h4 className={styles.cardTitle}>{currentProduct.name}</h4>
                                        <div className={styles.priceTag}>
                                            <span className={styles.currency}>$</span>
                                            <span className={styles.priceValue}>{currentProduct.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Animated Progress Line */}
                            <div className={styles.progressWrapper}>
                                <div
                                    key={currentIdx}
                                    className={styles.progressBar}
                                    style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                                ></div>
                            </div>
                        </div>

                        {/* Stats and Socials */}
                        <div className={styles.statsAndSocials}>
                            {/* Stats */}
                            <div className={styles.statsWrapper}>
                                <div className={styles.statsHeader}>
                                    <h3 className={styles.statsLabel}>Active buyers</h3>
                                    <span className={styles.statsValue}>12 K</span>
                                </div>
                                <p className={styles.statsDescription}>
                                    We are ready to provide you with privileges and bonuses for regular customers.
                                </p>
                            </div>

                            {/* Footer Socials */}
                            <div className={styles.footerSocials}>
                                <div className={styles.socialLinks}>
                                    <a href="#" className={styles.socialIcon}>
                                        <span className={styles.socialText}>IG</span>
                                    </a>
                                    <a href="#" className={styles.socialIcon}>
                                        <span className={styles.socialText}>TG</span>
                                    </a>
                                </div>
                                <div className={styles.socialDivider}></div>
                                <span className={styles.supportLabel}>24/7 support</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPromoSection;
