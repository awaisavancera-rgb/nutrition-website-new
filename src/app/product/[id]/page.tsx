"use client";

import React, { useState, use } from 'react';
import styles from '../product.module.css';
import ProductCard from '../../../components/ProductCard';
import productsData from '../../../data/products.json';
import { useCart } from '../../../context/CartContext';
import { ShimmerButton } from '../../../components/ui/shimmer-button';

interface PageProps {
    params: Promise<{ id: string }>;
}

const ProductDetailsPage = ({ params }: PageProps) => {
    const { id } = use(params);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [isDescOpen, setIsDescOpen] = useState(true);
    const [isShippingOpen, setIsShippingOpen] = useState(false);
    const { addItem } = useCart();

    // Find the product in our data
    const product = productsData.find(p => p.id === id);

    if (!product) {
        return (
            <div className={styles.container}>
                <div className={styles.breadcrumb}>Home • Product not found</div>
                <h1>Product Not Found</h1>
            </div>
        );
    }

    // Clean up description: replace literal \n and \r\n with <br/>
    const cleanDescription = product.description
        ? product.description
            .replace(/\\r\\n/g, '<br/>')
            .replace(/\\n/g, '<br/>')
            .replace(/\r\n/g, '<br/>')
            .replace(/\n/g, '<br/>')
        : '';

    const handleAddToCart = () => {
        setIsLoading(true);
        setTimeout(() => {
            addItem({
                id: product.id,
                name: product.name,
                price: parseFloat(product.price),
                image: product.image,
                quantity: 1
            });
            setIsLoading(false);
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
        }, 600);
    };

    const relatedProducts = productsData
        .filter(p => p.id !== id && p.categories[0] === product.categories[0])
        .slice(0, 4);

    const finalRelated = relatedProducts.length > 0
        ? relatedProducts
        : productsData.filter(p => p.id !== id).slice(0, 4);

    // Check if product has variations
    const hasColors = (product as any).colors && (product as any).colors.length > 0;
    const hasSizes = (product as any).sizes && (product as any).sizes.length > 0;

    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>Home • {product.categories[0]} • {product.name}</div>

            {/* Gallery Section */}
            <div className={styles.galleryGrid}>
                <div className={styles.mainImageWrapper}>
                    <img src={product.image} alt={product.name} className={styles.mainImage} />
                    <div className={styles.imageTag}>{product.categories[0]}</div>
                </div>
                <div className={styles.sideImagesGrid}>
                    {product.images?.slice(0, 4).map((img, index) => (
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
                        <h1 className={styles.productTitle}>{product.name}</h1>
                        <button className={styles.wishlistBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={styles.rating}>
                        <span className={styles.star}>★</span> 4.9 (41) New Reviews
                    </div>

                    {(hasColors || hasSizes) && (
                        <div className={styles.optionsGrid}>
                            {hasColors && (
                                <div>
                                    <h3 className={styles.sectionTitle}>Color</h3>
                                    <div className={styles.colorOptions}>
                                        {(product as any).colors.map((c: any) => (
                                            <div key={c.name} className={`${styles.colorOption} ${selectedColor === c.name ? styles.activeColor : ''}`} onClick={() => setSelectedColor(c.name)}>
                                                <div className={styles.colorCircle} style={{ background: c.color }}></div>
                                                <span className={styles.colorName}>{c.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {hasSizes && (
                                <div>
                                    <h3 className={styles.sectionTitle}>Size</h3>
                                    <div className={styles.sizeOptions}>
                                        {(product as any).sizes.map((size: string) => (
                                            <button
                                                key={size}
                                                className={`${styles.sizeBtn} ${selectedSize === size ? styles.active : ''}`}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <div className={`${styles.accordionSection} ${isDescOpen ? styles.open : ''}`}>
                        <div className={styles.sectionHeader} onClick={() => setIsDescOpen(!isDescOpen)}>
                            <h3 className={styles.sectionTitle}>Description</h3>
                            <svg className={styles.chevron} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                        <div className={styles.accordionContent}>
                            <div
                                className={styles.descText}
                                dangerouslySetInnerHTML={{ __html: cleanDescription }}
                            />
                        </div>
                    </div>

                    <div className={`${styles.accordionSection} ${isShippingOpen ? styles.open : ''}`}>
                        <div className={styles.sectionHeader} onClick={() => setIsShippingOpen(!isShippingOpen)}>
                            <h3 className={styles.sectionTitle}>Shipping</h3>
                            <svg className={styles.chevron} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                        <div className={styles.accordionContent}>
                            <div className={styles.shippingSection}>
                                <div className={styles.shippingCard}>
                                    <div className={styles.shippingIcon}>%</div>
                                    <div className={styles.shippingInfo}>
                                        <h4>Discount</h4>
                                        <p>&gt; $50.00 Disc 10%</p>
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
                                        <p>3-5 Working Days</p>
                                    </div>
                                </div>
                                <div className={styles.shippingCard}>
                                    <div className={styles.shippingIcon}>🚚</div>
                                    <div className={styles.shippingInfo}>
                                        <h4>Estimation Arrive</h4>
                                        <p>Within a week</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className={styles.rightColumn}>
                    <div className={styles.priceCard}>
                        <span className={styles.price}>${product.price}</span>
                        <ShimmerButton
                            className={styles.buyNowBtn}
                            onClick={handleAddToCart}
                            disabled={isLoading}
                        >
                            {isLoading ? "Adding..." : isAdded ? "Added!" : "Add to Cart"}
                            {!isLoading && !isAdded && (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            )}
                        </ShimmerButton>
                    </div>

                    <div className={styles.reviewsHeader}>
                        <h3 className={styles.sectionTitle}>Reviews (41)</h3>
                        <span className={styles.seeMore}>See more</span>
                    </div>

                    <div className={styles.reviewsList}>
                        {[1, 2].map(id => (
                            <div key={id} className={styles.reviewItem}>
                                <div className={styles.reviewerInfo}>
                                    <div className={styles.reviewerAvatar} style={{ background: '#eee', borderRadius: '50%', width: '40px', height: '40px' }}></div>
                                    <div>
                                        <span className={styles.reviewerName}>Customer {id}</span>
                                        <span className={styles.reviewDate}>13/12/2024</span>
                                    </div>
                                    <div className={styles.reviewStars}>
                                        {'★'.repeat(5)}
                                    </div>
                                </div>
                                <p className={styles.reviewText}>Great product, highly recommended!</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className={styles.relatedSection}>
                <h2 className={styles.relatedTitle}>More All You Needs.</h2>
                <div className={styles.relatedGrid}>
                    {finalRelated.map((p) => (
                        <ProductCard
                            key={p.id}
                            product={p}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
