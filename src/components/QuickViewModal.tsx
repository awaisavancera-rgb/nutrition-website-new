"use client";

import React, { useEffect, useState } from 'react';
import styles from './QuickViewModal.module.css';
import { ShimmerButton } from './ui/shimmer-button';
import { useCart } from '../context/CartContext';

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
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const { addItem } = useCart();

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
            addItem({
                id: product.id,
                name: product.name,
                price: parseFloat(product.price.replace('$', '')),
                image: product.image,
                quantity: quantity
            });
            setIsLoading(false);
            setIsAdded(true);

            // Reset "Added" state after 2 seconds
            setTimeout(() => {
                setIsAdded(false);
                onClose(); // Close modal after adding
            }, 2000);
        }, 800);
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
                            <div className={styles.badgeRow}>
                                <span className={styles.saleBadge}>-10%</span>
                            </div>
                            <h2 className={styles.title}>{product.name}</h2>

                            <div className={styles.ratingRow}>
                                <div className={styles.stars}>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#ffb800">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className={styles.reviewCount}>1 review</span>
                            </div>

                            <div className={styles.priceRow}>
                                <span className={styles.price}>${product.price}</span>
                                {product.regularPrice && product.regularPrice !== product.price && (
                                    <span className={styles.oldPrice}>${product.regularPrice}</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.descriptionAccordion}>
                            <button
                                className={styles.accordionHeader}
                                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                            >
                                <span>Description</span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    style={{ transform: isDescriptionOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            <div
                                className={`${styles.accordionContent} ${isDescriptionOpen ? styles.open : ''}`}
                            >
                                <div
                                    className={styles.descriptionText}
                                    dangerouslySetInnerHTML={{
                                        __html: (product.description || "This advanced serum is designed to reduce the appearance of fine lines and wrinkles, promoting smoother and more youthful skin. Infused with potent anti-aging ingredients, it hydrates and revitalizes your complexion.")
                                            .replace(/\\r\\n/g, ' ')
                                            .replace(/\\n/g, ' ')
                                            .replace(/\r\n/g, ' ')
                                            .replace(/\n/g, ' ')
                                    }}
                                />
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

                            <button
                                className={styles.addToCartBtn}
                                onClick={handleAddToCart}
                                disabled={isLoading || isAdded}
                            >
                                {isLoading ? (
                                    <div className={styles.loader}></div>
                                ) : isAdded ? (
                                    "Added to Cart"
                                ) : (
                                    "Add to Cart"
                                )}
                            </button>

                            <button className={styles.iconBtn} aria-label="Add to wishlist">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </button>

                            <button className={styles.iconBtn} aria-label="Compare">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
                                </svg>
                            </button>
                        </div>

                        <ShimmerButton
                            className={styles.buyNowBtn}
                            onClick={() => console.log('Buy it now')}
                        >
                            Buy it now
                        </ShimmerButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
