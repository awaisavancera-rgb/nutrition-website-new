"use client";

import React from 'react';
import styles from './shop.module.css';
import ShopSidebar from '../../components/ShopSidebar';
import ShopToolbar from '../../components/ShopToolbar';
import ProductCard from '../../components/ProductCard';
import productsData from '../../data/products.json';

const ShopPage = () => {
    // Pagination mock
    const pages = [1, 2];
    const currentPage = 1;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.breadcrumb}>Home › Shop</div>
                <h1 className={styles.title}>Shop</h1>
                <p className={styles.description}>
                    Discover effortless styles across sweaters, tees, dresses, crop-tops, blazers, and more—designed to fit your lifestyle and elevate your everyday look.
                </p>
            </header>

            <div className={styles.mainContent}>
                <aside className={styles.sidebar}>
                    <ShopSidebar />
                </aside>

                <main className={styles.contentArea}>
                    <ShopToolbar />

                    <div className={styles.productGrid}>
                        {productsData.slice(0, 12).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product as any}
                            />
                        ))}
                    </div>

                    <div className={styles.pagination}>
                        {pages.map(page => (
                            <button
                                key={page}
                                className={`${styles.pageBtn} ${currentPage === page ? styles.active : ''}`}
                            >
                                {page}
                            </button>
                        ))}
                        <button className={styles.pageBtn}>›</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ShopPage;
