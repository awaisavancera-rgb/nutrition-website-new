"use client";

import React, { useState } from 'react';
import styles from './ShopSidebar.module.css';
import productsData from '../data/products.json';

const ShopSidebar = () => {
    const [expandedSections, setExpandedSections] = useState({
        categories: true,
        availability: true,
        price: true,
        brand: true,
        color: true,
        size: true,
        featured: true
    });

    const [priceRange, setPriceRange] = useState({ min: 10, max: 360 });

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

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
            <div className={`${styles.section} ${!expandedSections.categories ? styles.collapsed : ''}`}>
                <h3 className={styles.sectionTitle} onClick={() => toggleSection('categories')}>
                    Products Category
                    <span>{expandedSections.categories ? '−' : '+'}</span>
                </h3>
                <div className={styles.sectionContent}>
                    <div className={styles.innerContent}>
                        <ul className={styles.list}>
                            {categories.map((cat) => (
                                <li key={cat.name} className={styles.listItem}>
                                    {cat.name}
                                    <span className={styles.count}>({cat.count})</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Availability */}
            <div className={`${styles.section} ${!expandedSections.availability ? styles.collapsed : ''}`}>
                <h3 className={styles.sectionTitle} onClick={() => toggleSection('availability')}>
                    Availability
                    <span>{expandedSections.availability ? '−' : '+'}</span>
                </h3>
                <div className={styles.sectionContent}>
                    <div className={styles.innerContent}>
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
                </div>
            </div>

            {/* Price */}
            <div className={`${styles.section} ${!expandedSections.price ? styles.collapsed : ''}`}>
                <h3 className={styles.sectionTitle} onClick={() => toggleSection('price')}>
                    Price
                    <span>{expandedSections.price ? '−' : '+'}</span>
                </h3>
                <div className={styles.sectionContent}>
                    <div className={styles.innerContent}>
                        <div className={styles.priceRange}>
                            <div className={`${styles.price_slider} ${styles.ui_slider}`}>
                                <div
                                    className={styles.ui_slider_range}
                                    style={{ left: '0%', width: '100%' }}
                                ></div>
                                <span className={styles.ui_slider_handle} style={{ left: '0%' }}></span>
                                <span className={styles.ui_slider_handle} style={{ left: '100%' }}></span>
                            </div>
                            <div className={styles.priceInputs}>
                                Price: ${priceRange.min} — ${priceRange.max}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brand */}
            <div className={`${styles.section} ${!expandedSections.brand ? styles.collapsed : ''}`}>
                <h3 className={styles.sectionTitle} onClick={() => toggleSection('brand')}>
                    Brand
                    <span>{expandedSections.brand ? '−' : '+'}</span>
                </h3>
                <div className={styles.sectionContent}>
                    <div className={styles.innerContent}>
                        <div className={styles.checkboxGroup}>
                            {['Adidas', 'Gap', 'Giorgio', 'Lacoste', 'Prada', 'Zara'].map((brand) => (
                                <label key={brand} className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.checkbox} />
                                    {brand}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Color */}
            <div className={`${styles.section} ${!expandedSections.color ? styles.collapsed : ''}`}>
                <h3 className={styles.sectionTitle} onClick={() => toggleSection('color')}>
                    Color
                    <span>{expandedSections.color ? '−' : '+'}</span>
                </h3>
                <div className={styles.sectionContent}>
                    <div className={styles.innerContent}>
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
                </div>
            </div>

            {/* Size */}
            <div className={`${styles.section} ${!expandedSections.size ? styles.collapsed : ''}`}>
                <h3 className={styles.sectionTitle} onClick={() => toggleSection('size')}>
                    Size
                    <span>{expandedSections.size ? '−' : '+'}</span>
                </h3>
                <div className={styles.sectionContent}>
                    <div className={styles.innerContent}>
                        <div className={styles.sizeGrid}>
                            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                <button key={size} className={styles.sizeBtn}>{size}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div className={`${styles.section} ${!expandedSections.featured ? styles.collapsed : ''}`}>
                <h3 className={styles.sectionTitle} onClick={() => toggleSection('featured')}>
                    Featured Products
                    <span>{expandedSections.featured ? '−' : '+'}</span>
                </h3>
                <div className={styles.sectionContent}>
                    <div className={styles.innerContent}>
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
                </div>
            </div>
        </aside>
    );
};

export default ShopSidebar;
