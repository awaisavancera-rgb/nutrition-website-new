"use client";

import React from 'react';
import styles from './ShopSidebar.module.css';
import productsData from '../data/products.json';

const ShopSidebar = () => {
    // Mock categories with counts
    const categories = [
        { name: 'Tops', count: 10 },
        { name: 'Blazers', count: 2 },
        { name: 'Sweaters', count: 12 },
        { name: 'Handbags', count: 1 },
        { name: 'T-Shirts', count: 15 },
        { name: 'Shorts', count: 8 },
        { name: 'Dress', count: 11 },
        { name: 'Hoodies', count: 5 },
        { name: 'Activewear', count: 15 },
        { name: 'Crop-top', count: 3 },
        { name: 'Coats', count: 2 }
    ];

    const featuredProducts = productsData.slice(0, 3);

    return (
        <aside className={styles.sidebar}>
            {/* Categories */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Products Category
                    <span>−</span>
                </h3>
                <ul className={styles.list}>
                    {categories.map((cat) => (
                        <li key={cat.name} className={styles.listItem}>
                            {cat.name}
                            <span className={styles.count}>({cat.count})</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Availability */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Availability
                    <span>−</span>
                </h3>
                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        On sale
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        In stock
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Out of stock
                    </label>
                </div>
            </div>

            {/* Price */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Price
                    <span>−</span>
                </h3>
                <div className={styles.priceRange}>
                    <input type="range" className={styles.rangeSlider} min="10" max="360" />
                    <div className={styles.priceInputs}>
                        Price: $10 — $360
                    </div>
                </div>
            </div>

            {/* Brand */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Brand
                    <span>−</span>
                </h3>
                <div className={styles.checkboxGroup}>
                    {['Adidas', 'Gap', 'Giorgio', 'Lacoste', 'Prada', 'Zara'].map((brand) => (
                        <label key={brand} className={styles.checkboxLabel}>
                            <input type="checkbox" className={styles.checkbox} />
                            {brand}
                        </label>
                    ))}
                </div>
            </div>

            {/* Color */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Color
                    <span>−</span>
                </h3>
                <div className={styles.colorGrid}>
                    {['#000', '#fff', '#f5f5dc', '#ff0000', '#0000ff', '#008000', '#ffff00', '#ffa500', '#800080', '#ffc0cb'].map((color) => (
                        <div
                            key={color}
                            className={styles.colorCircle}
                            style={{ background: color }}
                        />
                    ))}
                </div>
            </div>

            {/* Size */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Size
                    <span>−</span>
                </h3>
                <div className={styles.sizeGrid}>
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                        <button key={size} className={styles.sizeBtn}>{size}</button>
                    ))}
                </div>
            </div>

            {/* Featured Products */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Featured Products
                    <span>−</span>
                </h3>
                <div className={styles.featuredList}>
                    {featuredProducts.map((p) => (
                        <div key={p.id} className={styles.featuredItem}>
                            <img src={p.image} alt={p.name} className={styles.featuredImg} />
                            <div className={styles.featuredInfo}>
                                <h4 className={styles.featuredName}>{p.name}</h4>
                                <div className={styles.rating}>★★★★★</div>
                                <span className={styles.featuredPrice}>${p.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default ShopSidebar;
