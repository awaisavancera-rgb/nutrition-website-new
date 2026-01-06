import React from 'react';
import styles from './ProductCard.module.css';

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
    };
    theme?: 'light' | 'dark';
    badge?: string;
    showQuantity?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    theme = 'light',
    badge,
    showQuantity = false
}) => {
    const title = product?.name || "Nike Air Max 270";
    const category = product?.categories?.[0] || "WOMEN SHOES";
    const price = product?.price ? `$${product.price}` : "$139.99";
    const oldPrice = product?.regularPrice && product?.salePrice ? `$${product.regularPrice}` : (product?.price ? "" : "$169.99");
    const image = product?.image || "/bannner-hero-image.webp";
    const images = product?.images || [image, image, image, image];

    return (
        <div className={`${styles.card} ${theme === 'dark' ? styles.dark : ''}`}>
            {badge && <div className={styles.badge}>{badge}</div>}

            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.productImage} />
                {images.length > 1 && (
                    <img src={images[1]} alt={title} className={`${styles.productImage} ${styles.hoverImage}`} />
                )}

                <div className={styles.overlayButtons}>
                    <button className={styles.actionBtn} aria-label="Add to Wishlist" data-tooltip="Add to Wishlist">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button className={styles.actionBtn} aria-label="Quick View" data-tooltip="Quick View">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={styles.variants}>
                {images.slice(0, 4).map((img, i) => (
                    <div key={i} className={`${styles.variantThumb} ${i === 0 ? styles.active : ''}`}>
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
    );
};

export default ProductCard;
