import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    title?: string;
    category?: string;
    price?: string;
    oldPrice?: string;
    image?: string;
    theme?: 'light' | 'dark';
    badge?: string;
    showQuantity?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    title = "Nike Air Max 270",
    category = "WOMEN SHOES",
    price = "$139.99",
    oldPrice = "$169.99",
    image = "/bannner-hero-image.webp",
    theme = 'light',
    badge,
    showQuantity = false
}) => {
    return (
        <div className={`${styles.card} ${theme === 'dark' ? styles.dark : ''}`}>
            {badge && <div className={styles.badge}>{badge}</div>}

            <button className={styles.wishlistBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </button>

            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.productImage} />
            </div>

            <div className={styles.variants}>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`${styles.variantThumb} ${i === 1 ? styles.active : ''}`}>
                        <img src={image} alt="variant" className={styles.variantImg} />
                    </div>
                ))}
            </div>

            <div className={styles.details}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.category}>{category}</span>
                <div className={styles.priceRow}>
                    <span className={styles.price}>{price}</span>
                    {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
                </div>
            </div>

            {showQuantity ? (
                <div className={styles.quantityControl}>
                    <button className={styles.qtyBtn}>-</button>
                    <span className={styles.qtyValue}>1</span>
                    <button className={styles.qtyBtn}>+</button>
                    {/* Small heart button for this layout? Or just keep it consistent */}
                </div>
            ) : (
                <button className={styles.addToCartBtn}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    ADD TO CART
                </button>
            )}
        </div>
    );
};

export default ProductCard;
