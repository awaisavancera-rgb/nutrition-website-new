"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './ShoppableVideos.module.css';
import productsData from '../data/products.json';

const ShoppableVideos: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Get first 5 products from the data
    const siteProducts = productsData.slice(0, 5);

    const stories = [
        {
            id: 1,
            videoUrl: "https://cdn.dribbble.com/userupload/46086246/file/6f53cc5cd950adc8b1c7a05999262c6f.mp4",
            product: siteProducts[0],
            storyTitle: "hair wash day with Kitsch"
        },
        {
            id: 2,
            videoUrl: "https://cdn.dribbble.com/userupload/13345116/file/original-0be2e82e945c8f7747e6bfcd87579227.mp4",
            product: siteProducts[1],
            storyTitle: "morning routine essentials"
        },
        {
            id: 3,
            videoUrl: "https://cdn.dribbble.com/userupload/46086246/file/6f53cc5cd950adc8b1c7a05999262c6f.mp4",
            product: siteProducts[2],
            storyTitle: "night time skincare"
        },
        {
            id: 4,
            videoUrl: "https://cdn.dribbble.com/userupload/13345116/file/original-0be2e82e945c8f7747e6bfcd87579227.mp4",
            product: siteProducts[3],
            storyTitle: "daily vitamin boost"
        },
        {
            id: 5,
            videoUrl: "https://cdn.dribbble.com/userupload/46086246/file/6f53cc5cd950adc8b1c7a05999262c6f.mp4",
            product: siteProducts[4],
            storyTitle: "fitness & nutrition"
        }
    ];

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const cardElement = scrollRef.current.querySelector(`.${styles.videoCard}`);
            if (cardElement) {
                const cardWidth = (cardElement as HTMLElement).offsetWidth + 20; // width + gap
                const index = Math.round(scrollLeft / cardWidth);
                setActiveIndex(index);
            }
        }
    };

    const scrollTo = (index: number) => {
        if (scrollRef.current) {
            const cardElement = scrollRef.current.querySelector(`.${styles.videoCard}`);
            if (cardElement) {
                const cardWidth = (cardElement as HTMLElement).offsetWidth + 20;
                scrollRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section className={styles.shoppableSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Community Stories</h2>
                    <p className={styles.subtitle}>Express your style with our standout collection—fashion meets sophistication.</p>
                </div>
                <div
                    className={styles.carouselWrapper}
                    ref={scrollRef}
                    onScroll={handleScroll}
                >
                    <div className={styles.track}>
                        {stories.map((story) => (
                            <div key={story.id} className={styles.videoCard}>
                                <video
                                    src={story.videoUrl}
                                    className={styles.videoBg}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />

                                <div className={styles.centeredOverlay}>
                                    <span className={styles.storyTitle}>{story.storyTitle}</span>
                                    <div className={styles.playIcon}>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className={styles.productOverlay}>
                                    <div className={styles.productThumb}>
                                        <img src={story.product.image} alt={story.product.name} />
                                    </div>
                                    <div className={styles.productInfo}>
                                        <span className={styles.productName}>{story.product.name}</span>
                                        <span className={styles.productPrice}>${story.product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.pagination}>
                    {stories.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => scrollTo(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShoppableVideos;
