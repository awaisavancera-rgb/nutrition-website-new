"use client";

import React, { useState } from 'react';
import styles from './product.module.css';
import ProductCard from '../../components/ProductCard';

const ProductPage = () => {
    const [selectedColor, setSelectedColor] = useState('Greenish');
    const [selectedSize, setSelectedSize] = useState('S');

    const product = {
        title: "Nike Forward Hoodie",
        price: "€ 1,099",
        description: "Nike Forward catapults your classic hoodie into the future. Unlike traditional knit fabrics, Nike Forward combines multiple thin layers of select fibers for an exceptionally lightweight feel that's effortlessly warm and comfortable. Plus, this first iteration of Nike Forward reduces the carbon footprint by an average of 75% (due to the use of recycled materials, lower process-energy use, and lower material density) when used instead of our traditional knit fleece materials.",
        rating: 4.9,
        reviews: 41,
        images: [
            "/bannner-hero-image.webp", // Main
            "/bannner-hero-image.webp", // Side 1
            "/bannner-hero-image.webp", // Side 2
            "/bannner-hero-image.webp", // Side 3
            "/bannner-hero-image.webp"  // Side 4
        ]
    };

    const reviews = [
        {
            id: 1,
            name: "Alexander Stewart",
            date: "13/12/2024",
            rating: 5,
            text: "Goddamn!, this hoodie makes me feel soooooo much comfortable and genuinely warm af, i love this hoodie, make sure you buy it guys, love it!.",
            avatar: "/bannner-hero-image.webp",
            images: ["/bannner-hero-image.webp", "/bannner-hero-image.webp"]
        },
        {
            id: 2,
            name: "Simson Wili",
            date: "13/12/2024",
            rating: 5,
            text: "Very quick and easy! Great service, thanks!",
            avatar: "/bannner-hero-image.webp",
            images: ["/bannner-hero-image.webp"]
        },
        {
            id: 3,
            name: "J.Rodriguez",
            date: "13/12/2024",
            rating: 5,
            text: "Very quick and easy! Great service, thanks!",
            avatar: "/bannner-hero-image.webp",
            images: ["/bannner-hero-image.webp"]
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>Home • Product details</div>

            {/* Gallery Section */}
            <div className={styles.galleryGrid}>
                <div className={styles.mainImageWrapper}>
                    <img src={product.images[0]} alt={product.title} className={styles.mainImage} />
                    <div className={styles.imageTag}>Hoddie</div>
                </div>
                <div className={styles.sideImagesGrid}>
                    {product.images.slice(1, 5).map((img, index) => (
                        <div key={index} className={styles.sideImageWrapper}>
                            <img src={img} alt={`View ${index + 1}`} className={styles.sideImage} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Split */}
            <div className={styles.contentSplit}>
                {/* Left Column */}
                <div className={styles.leftColumn}>
                    <div className={styles.productHeader}>
                        <h1 className={styles.productTitle}>{product.title}</h1>
                        <button className={styles.wishlistBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={styles.rating}>
                        <span className={styles.star}>★</span> {product.rating} ({product.reviews}) New Reviews
                    </div>

                    <div className={styles.optionsGrid}>
                        <div>
                            <h3 className={styles.sectionTitle}>Color</h3>
                            <div className={styles.colorOptions}>
                                <div className={styles.colorOption} onClick={() => setSelectedColor('Black')}>
                                    <div className={styles.colorCircle} style={{ background: 'black' }}></div>
                                    <span className={styles.colorName}>Black</span>
                                </div>
                                <div className={styles.colorOption} onClick={() => setSelectedColor('White')}>
                                    <div className={styles.colorCircle} style={{ background: 'white' }}></div>
                                    <span className={styles.colorName}>White</span>
                                </div>
                                <div className={styles.colorOption} onClick={() => setSelectedColor('Greenish')}>
                                    <div className={styles.colorCircle} style={{ background: '#9ab09a' }}></div>
                                    <span className={styles.colorName}>Greenish</span>
                                </div>
                                <div className={styles.colorOption} onClick={() => setSelectedColor('Grey')}>
                                    <div className={styles.colorCircle} style={{ background: '#e0e0e0' }}></div>
                                    <span className={styles.colorName}>Grey</span>
                                </div>
                                <div className={styles.colorOption} onClick={() => setSelectedColor('Logan')}>
                                    <div className={styles.colorCircle} style={{ background: '#7a7a9a' }}></div>
                                    <span className={styles.colorName}>Logan</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.sectionTitle}>Size</h3>
                            <div className={styles.sizeOptions}>
                                {['S', 'M', 'L', 'XL', 'XXL', 'XL'].map((size, index) => (
                                    <button
                                        key={`${size}-${index}`}
                                        className={`${styles.sizeBtn} ${selectedSize === size ? styles.active : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <div className={styles.sectionHeader}>
                            <h3 className={styles.sectionTitle}>Description</h3>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                        </div>
                        <p className={styles.descText}>{product.description}</p>
                    </div>

                    <div className={styles.shippingContainer}>
                        <div className={styles.sectionHeader}>
                            <h3 className={styles.sectionTitle}>Shipping</h3>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                        </div>
                        <div className={styles.shippingSection}>
                            <div className={styles.shippingCard}>
                                <div className={styles.shippingIcon}>%</div>
                                <div className={styles.shippingInfo}>
                                    <h4>Discount</h4>
                                    <p>&gt; Rp 3,000,000 Disc 50%</p>
                                </div>
                            </div>
                            <div className={styles.shippingCard}>
                                <div className={styles.shippingIcon}>📦</div>
                                <div className={styles.shippingInfo}>
                                    <h4>Package</h4>
                                    <p>Regular Package</p>
                                </div>
                            </div>
                            <div className={styles.shippingCard}>
                                <div className={styles.shippingIcon}>📅</div>
                                <div className={styles.shippingInfo}>
                                    <h4>Delivery Time</h4>
                                    <p>6-12 Working Days</p>
                                </div>
                            </div>
                            <div className={styles.shippingCard}>
                                <div className={styles.shippingIcon}>🚚</div>
                                <div className={styles.shippingInfo}>
                                    <h4>Estimation Arrive</h4>
                                    <p>10 - 12 October 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className={styles.rightColumn}>
                    <div className={styles.priceCard}>
                        <span className={styles.price}>{product.price}</span>
                        <button className={styles.buyNowBtn}>
                            Buy Now
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>

                    <div className={styles.reviewsHeader}>
                        <h3 className={styles.sectionTitle}>Reviews ({product.reviews})</h3>
                        <span className={styles.seeMore}>See more</span>
                    </div>

                    <div className={styles.reviewsList}>
                        {reviews.map(review => (
                            <div key={review.id} className={styles.reviewItem}>
                                <div className={styles.reviewerInfo}>
                                    <img src={review.avatar} alt={review.name} className={styles.reviewerAvatar} />
                                    <div>
                                        <span className={styles.reviewerName}>{review.name}</span>
                                        <span className={styles.reviewDate}>{review.date}</span>
                                    </div>
                                    <div className={styles.reviewStars}>
                                        {'★'.repeat(review.rating)}
                                    </div>
                                </div>
                                <p className={styles.reviewText}>{review.text}</p>
                                <div className={styles.reviewImages}>
                                    {review.images.map((img, idx) => (
                                        <img key={idx} src={img} alt="review" className={styles.reviewImg} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className={styles.relatedSection}>
                <h2 className={styles.relatedTitle}>More All You Needs.</h2>
                <div className={styles.relatedGrid}>
                    <ProductCard title="Nike Air Max" price="$120" image="/bannner-hero-image.webp" />
                    <ProductCard title="Nike Dunk Low" price="$100" image="/bannner-hero-image.webp" theme="dark" />
                    <ProductCard title="Nike Zoom" price="$150" image="/bannner-hero-image.webp" />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
