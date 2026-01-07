import React from 'react';
import ProductCard from './ProductCard';
import styles from './FeaturedProducts.module.css';

interface FeaturedProductsProps {
    products: any[];
    title?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
    products,
    title = "Best Sellers"
}) => {
    return (
        <section className={styles.featuredSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <a href="#" className={styles.viewAll}>View All Products</a>
            </div>
            <div className={styles.grid}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
