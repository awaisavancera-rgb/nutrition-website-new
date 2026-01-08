"use client";

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import styles from './FeaturedProducts.module.css';
import { ShimmerButton } from './ui/shimmer-button';

interface FeaturedProductsProps {
    products: any[];
    title?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
    products,
    title = "Best Sellers"
}) => {
    const [showAll, setShowAll] = useState(false);
    const displayProducts = showAll ? products : products.slice(0, 5);

    return (
        <section className={styles.featuredSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <ShimmerButton
                    className={styles.shimmerViewAll}
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Show Less" : "View All Products"}
                </ShimmerButton>
            </div>
            <div className={styles.grid}>
                {displayProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
