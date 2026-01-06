"use client";

import React, { useRef } from 'react';
import styles from './CategoryCarousel.module.css';

const categories = [
    { id: 1, name: 'Beauty & Skin Health', image: '/fitness_models_dark_gear.png', count: '24 Items' },
    { id: 2, name: 'Cognitive Nootropics', image: '/fitness_models_dark_gear.png', count: '18 Items' },
    { id: 3, name: 'Daily Multivitamins', image: '/fitness_models_dark_gear.png', count: '12 Items' },
    { id: 4, name: 'Digestion & Gut Health', image: '/fitness_models_dark_gear.png', count: '30 Items' },
    { id: 5, name: 'Digestive Wellness', image: '/fitness_models_dark_gear.png', count: '15 Items' },
    { id: 6, name: 'Energy & Performance', image: '/fitness_models_dark_gear.png', count: '20 Items' },
    { id: 7, name: 'Food & Drinks', image: '/fitness_models_dark_gear.png', count: '10 Items' },
    { id: 8, name: 'Healthy Weight', image: '/fitness_models_dark_gear.png', count: '25 Items' },
    { id: 9, name: 'Immune Support', image: '/fitness_models_dark_gear.png', count: '22 Items' },
    { id: 10, name: 'Protein & Fitness', image: '/fitness_models_dark_gear.png', count: '35 Items' },
    { id: 11, name: 'Sleep & Recovery', image: '/fitness_models_dark_gear.png', count: '14 Items' },
    { id: 12, name: 'Vitamins & Supplements', image: '/fitness_models_dark_gear.png', count: '40 Items' },
];

const CategoryCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className={styles.carouselContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>Shop by Categories</h2>
                <div className={styles.controls}>
                    <button
                        className={styles.controlBtn}
                        onClick={() => scroll('left')}
                        aria-label="Scroll Left"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        className={styles.controlBtn}
                        onClick={() => scroll('right')}
                        aria-label="Scroll Right"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={styles.trackWrapper} ref={scrollRef}>
                <div className={styles.track}>
                    {categories.map((cat) => (
                        <div key={cat.id} className={styles.categoryCard}>
                            <div className={styles.circlesOverlay}>
                                <div className={`${styles.circle} ${styles.circle1}`}></div>
                                <div className={`${styles.circle} ${styles.circle2}`}></div>
                                <div className={`${styles.circle} ${styles.circle3}`}></div>
                            </div>

                            <div className={styles.contentOverlay}>
                                <h3 className={styles.mainHeadline}>{cat.name}</h3>
                            </div>

                            <div className={styles.imageWrapper}>
                                <img src={cat.image} alt={cat.name} />
                            </div>

                            <div className={styles.itemCountBadge}>
                                {cat.count}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryCarousel;
