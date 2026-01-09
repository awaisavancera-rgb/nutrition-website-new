"use client";

import React from 'react';
import styles from './BlogSidebar.module.css';
import { Search } from 'lucide-react';

const BlogSidebar = () => {
    const categories = [
        'Design Ideas',
        'Healthier Living',
        'Home Improvement',
        'Lifestyle',
        'Tips & Tricks',
        'Trending outfit'
    ];

    const popularPosts = [
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-1-768x439.webp',
            title: 'Summer Travel Fashion 2024',
            date: 'March 3, 2025'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-2-768x439.webp',
            title: 'Latest Swimsuit Model This Year',
            date: 'October 23, 2024'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-3-768x439.webp',
            title: 'The History Of Patterned Dresses',
            date: 'August 13, 2024'
        }
    ];

    const tags = ['Fashion', 'Life Style', 'Minimalist', 'Outfit', 'Summer', 'Trend'];

    return (
        <aside className={styles.sidebar}>
            {/* Search */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Search</h3>
                <div className={styles.searchWrapper}>
                    <input type="text" placeholder="Search for blog" className={styles.searchInput} />
                    <button className={styles.searchBtn}>
                        <Search size={18} />
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Blog Categories</h3>
                <ul className={styles.categoryList}>
                    {categories.map(cat => (
                        <li key={cat} className={styles.categoryItem}>{cat}</li>
                    ))}
                </ul>
            </div>

            {/* Popular Posts */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Popular Posts</h3>
                <div className={styles.popularList}>
                    {popularPosts.map((post, index) => (
                        <div key={index} className={styles.popularItem}>
                            <img src={post.image} alt={post.title} className={styles.popularThumb} />
                            <div className={styles.popularInfo}>
                                <h4 className={styles.popularTitle}>{post.title}</h4>
                                <span className={styles.popularDate}>{post.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Tags</h3>
                <div className={styles.tagCloud}>
                    {tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>

            {/* Banner */}
            <div className={styles.banner}>
                <img
                    src="https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-5-768x439.webp"
                    alt="Promo"
                    className={styles.bannerImg}
                />
                <div className={styles.bannerOverlay}></div>
                <div className={styles.bannerContent}>
                    <span className={styles.bannerSubtitle}>TOP SALE</span>
                    <h3 className={styles.bannerTitle}>Here's Your 15% Coupon</h3>
                    <button className={styles.bannerBtn}>Discover Now</button>
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;
