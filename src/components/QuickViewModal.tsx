"use client";

import React, { useEffect, useState } from 'react';
import styles from './QuickViewModal.module.css';
import { ShimmerButton } from './ui/shimmer-button';

interface QuickViewModalProps {
    product: {
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
    onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
    const [displayImage, setDisplayImage] = useState(product.image);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('Greenish');
    const [selectedSize, setSelectedSize] = useState('S');
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        const currentIndex = product.images.indexOf(displayImage);
        const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
        setDisplayImage(product.images[prevIndex]);
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        const currentIndex = product.images.indexOf(displayImage);
        const nextIndex = (currentIndex + 1) % product.images.length;
        setDisplayImage(product.images[nextIndex]);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
    };

    // Prevent scrolling when modal is open
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`;

        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = originalStyle;
            document.body.style.paddingRight = '';
        };
    }, []);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleAddToCart = () => {
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsAdded(true);

            // Close modal after showing "Added" state
            setTimeout(() => {
                onClose();
            }, 1500);
        }, 1000);
    };

    const defaultColors = [
        { name: 'Black', value: 'black' },
        { name: 'White', value: 'white' },
        { name: 'Greenish', value: '#9ab09a' },
        { name: 'Grey', value: '#e0e0e0' },
        { name: 'Logan', value: '#7a7a9a' }
    ];

    const defaultSizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const colors = product.variations?.colors || defaultColors;
    const sizes = product.variations?.sizes || defaultSizes;

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className={styles.content}>
                    <div className={styles.imageArea}>
                        <div className={styles.mainImageWrapper}
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setIsZoomed(true)}
                            onMouseLeave={() => setIsZoomed(false)}
                        >
                            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrevImage} aria-label="Previous image">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <img
                                src={displayImage}
                                alt={product.name}
                                className={styles.mainImage}
                                style={{
                                    transform: isZoomed ? `scale(2)` : 'scale(1)',
                                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                                }}
                            />
                            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNextImage} aria-label="Next image">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                        <div className={styles.variants}>
                            {product.images.slice(0, 4).map((img, i) => (
                                <div
                                    key={i}
                                    className={`${styles.variantThumb} ${img === displayImage ? styles.active : ''}`}
                                    onMouseEnter={() => setDisplayImage(img)}
                                >
                                    <img src={img} alt="variant" className={styles.variantImg} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.detailsArea}>
                        <div className={styles.headerInfo}>
                            <span className={styles.category}>{product.categories[0]}</span>
                            <h2 className={styles.title}>{product.name}</h2>

                            <div className={styles.priceRow}>
                                <span className={styles.price}>${product.price}</span>
                                {product.regularPrice && product.regularPrice !== product.price && (
                                    <span className={styles.oldPrice}>${product.regularPrice}</span>
                                )}
                            </div>
                        </div>

                        {product.variations && (
                            <div className={styles.variations}>
                                {colors.length > 0 && (
                                    <div className={styles.variationSection}>
                                        <h3 className={styles.sectionTitle}>Color</h3>
                                        <div className={styles.colorOptions}>
                                            {colors.map((color) => (
                                                <div
                                                    key={color.name}
                                                    className={`${styles.colorOption} ${selectedColor === color.name ? styles.activeColor : ''}`}
                                                    onClick={() => setSelectedColor(color.name)}
                                                >
                                                    <div className={styles.colorCircle} style={{ background: color.value }}></div>
                                                    <span className={styles.colorName}>{color.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {sizes.length > 0 && (
                                    <div className={styles.variationSection}>
                                        <h3 className={styles.sectionTitle}>Size</h3>
                                        <div className={styles.sizeOptions}>
                                            {sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ''}`}
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

                        <div className={styles.actions}>
                            <div className={styles.qtyControl}>
                                <button className={styles.qtyBtn} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                <span className={styles.qtyValue}>{quantity}</span>
                                <button className={styles.qtyBtn} onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <ShimmerButton
                                className={styles.shimmerAddToCart}
                                onClick={handleAddToCart}
                                disabled={isLoading || isAdded}
                            >
                                <div className={styles.btnContent}>
                                    {isLoading ? (
                                        <div className={styles.loader}></div>
                                    ) : isAdded ? (
                                        <>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            Added to Cart
                                        </>
                                    ) : (
                                        <>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <circle cx="9" cy="21" r="1"></circle>
                                                <circle cx="20" cy="21" r="1"></circle>
                                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>
                                            Add to Cart
                                        </>
                                    )}
                                </div>
                            </ShimmerButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
