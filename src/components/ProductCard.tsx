"use client";

import React, { useState } from 'react';
import styles from './ProductCard.module.css';

import QuickViewModal from './QuickViewModal';

interface ProductCardProps {
    product?: {
        id: string;
        name: string;
        price: string;
        regularPrice?: string;
        salePrice?: string;
        image: string;
        images: string[];
        categories: string[];
        description: string;
        variations?: {
            colors?: { name: string; value: string }[];
            sizes?: string[];
        };
    };
    theme?: 'light' | 'dark';
    layout?: 'horizontal' | 'vertical';
    badge?: string;
    showQuantity?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    theme = 'light',
    layout = 'horizontal',
    badge,
    showQuantity = false
}) => {
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
    const title = product?.name || "Nike Air Max 270";
    const category = product?.categories?.[0] || "WOMEN SHOES";
    const price = product?.price ? `$${product.price}` : "$139.99";
    const oldPrice = product?.regularPrice && product?.salePrice ? `$${product.regularPrice}` : (product?.price ? "" : "$169.99");
    const defaultImage = product?.image || "/bannner-hero-image.webp";
    const images = product?.images || [defaultImage, defaultImage, defaultImage, defaultImage];

    const [displayImage, setDisplayImage] = useState(defaultImage);

    // Find a hover image that is different from the current display image
    const hoverImage = images.find(img => img !== displayImage) || images[1] || defaultImage;

    return (
        <>
            <div className={`${styles.card} ${theme === 'dark' ? styles.dark : ''} ${layout === 'vertical' ? styles.vertical : ''}`}>
                {badge && <div className={styles.badge}>{badge}</div>}

                <div className={styles.imageContainer}>
                    <img src={displayImage} alt={title} className={styles.productImage} />
                    {hoverImage && hoverImage !== displayImage && (
                        <img src={hoverImage} alt={title} className={`${styles.productImage} ${styles.hoverImage}`} />
                    )}

                    <div className={styles.overlayButtons}>
                        <button className={styles.actionBtn} aria-label="Add to Wishlist" data-tooltip="Add to Wishlist">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                        <button
                            className={styles.actionBtn}
                            aria-label="Quick View"
                            data-tooltip="Quick View"
                            onClick={() => setIsQuickViewOpen(true)}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={styles.variants}>
                    {images.slice(0, 4).map((img, i) => (
                        <div
                            key={i}
                            className={`${styles.variantThumb} ${img === displayImage ? styles.active : ''}`}
                            onMouseEnter={() => setDisplayImage(img)}
                        >
                            <img src={img} alt="variant" className={styles.variantImg} />
                        </div>
                    ))}
                </div>

                <div className={styles.details}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.category}>{category}</span>
                    <div className={styles.priceRow}>
                        <div className={styles.priceWrapper}>
                            <span className={styles.price}>{price}</span>
                            {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
                        </div>
                        <div className={styles.miniQtyControl}>
                            <button className={styles.miniQtyBtn}>-</button>
                            <span className={styles.miniQtyValue}>1</span>
                            <button className={styles.miniQtyBtn}>+</button>
                        </div>
                    </div>
                </div>

                <button className={styles.addToCartBtn}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Add to Cart
                </button>
            </div>

            {isQuickViewOpen && product && (
                <QuickViewModal
                    product={product as any}
                    onClose={() => setIsQuickViewOpen(false)}
                />
            )}
        </>
    );
};

export default ProductCard;
