"use client";

import React, { useRef } from 'react';
import styles from './TextTestimonials.module.css';
import productsData from '../data/products.json';

const TextTestimonials: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const siteProducts = productsData.slice(0, 5);

    const testimonials = [
        {
            id: 1,
            text: "These are sooo pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Wicked cute...",
            emoji: "https://s.w.org/images/core/emoji/15.1.0/svg/1f60d.svg",
            author: "Carie-Gosée H.",
            image: "/images/testimonials/person1.png",
            product: siteProducts[0]
        },
        {
            id: 2,
            text: "A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase... Thank you!",
            emoji: "https://s.w.org/images/core/emoji/15.1.0/svg/1f917.svg",
            author: "Cameron Smith",
            image: "/images/testimonials/person2.png",
            product: siteProducts[1]
        },
        {
            id: 3,
            text: "I've been using these supplements for a month now and the results are amazing. My energy levels have spiked and I feel much more focused.",
            emoji: "https://s.w.org/images/core/emoji/15.1.0/svg/1f60a.svg",
            author: "James Wilson",
            image: "/images/testimonials/person3.png",
            product: siteProducts[2]
        },
        {
            id: 4,
            text: "The quality is top-notch. I've tried many brands but this one stands out. Fast shipping and great customer service too!",
            emoji: "https://s.w.org/images/core/emoji/15.1.0/svg/1f44d.svg",
            author: "Sarah Jenkins",
            image: "/images/testimonials/person4.png",
            product: siteProducts[3]
        },
        {
            id: 5,
            text: "Absolutely love the taste and how easy it is to mix. It's become a staple in my morning routine. Highly recommended!",
            emoji: "https://s.w.org/images/core/emoji/15.1.0/svg/2728.svg",
            author: "Martha Stewart",
            image: "/images/testimonials/person5.png",
            product: siteProducts[4]
        }
    ];

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
        <section className={styles.testimonialSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>Customer Say!</h2>
                        <p className={styles.subtitle}>Customers love our products and we always strive to please them all.</p>
                    </div>
                    <div className={styles.controls}>
                        <button
                            className={styles.controlBtn}
                            onClick={() => scroll('left')}
                            aria-label="Scroll Left"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            className={styles.controlBtn}
                            onClick={() => scroll('right')}
                            aria-label="Scroll Right"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.trackWrapper} ref={scrollRef}>
                    <div className={styles.track}>
                        {testimonials.map((t) => (
                            <div key={t.id} className={styles.item}>
                                <div className={styles.imageColumn}>
                                    <img src={t.image} alt={t.author} className={styles.personImage} />
                                </div>
                                <div className={styles.summaryColumn}>
                                    <div className={styles.rating}>
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <span key={s} className={styles.starIcon}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffc107">
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            </span>
                                        ))}
                                    </div>

                                    <div className={styles.nameRow}>
                                        <div className={styles.name}>{t.author}</div>
                                        <div className={styles.verifiedBadge}>
                                            <span className={styles.checkIcon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                                    <path d="M9.75195 0.751953C9.87044 0.642578 10.0072 0.587891 10.1621 0.587891C10.3262 0.587891 10.4629 0.642578 10.5723 0.751953C10.6908 0.870443 10.75 1.01172 10.75 1.17578C10.75 1.33073 10.6908 1.46289 10.5723 1.57227L4.16016 7.99805C4.05078 8.10742 3.91406 8.16211 3.75 8.16211C3.58594 8.16211 3.44922 8.10742 3.33984 7.99805L0.427734 5.07227C0.309245 4.96289 0.25 4.83073 0.25 4.67578C0.25 4.51172 0.309245 4.37044 0.427734 4.25195C0.537109 4.14258 0.669271 4.08789 0.824219 4.08789C0.988281 4.08789 1.12956 4.14258 1.24805 4.25195L3.75 6.75391L9.75195 0.751953Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            Verified Buyer
                                        </div>
                                    </div>

                                    <div className={styles.content}>
                                        {t.text}
                                        <img src={t.emoji} alt="emoji" className={styles.emoji} />
                                    </div>

                                    <div className={styles.productRow}>
                                        <a href="#" className={styles.productImage}>
                                            <img src={t.product.image} alt={t.product.name} />
                                        </a>
                                        <div className={styles.productSummary}>
                                            <div className={styles.productTitle}>
                                                <a href="#">{t.product.name}</a>
                                            </div>
                                            <div className={styles.productPrice}>
                                                <span className={styles.currency}>$</span>{t.product.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextTestimonials;
