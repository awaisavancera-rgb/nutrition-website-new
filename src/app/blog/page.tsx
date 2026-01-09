"use client";

import React from 'react';
import styles from './blog.module.css';
import BlogPostCard from '@/components/BlogPostCard';
import BlogSidebar from '@/components/BlogSidebar';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const BlogPage = () => {
    const posts = [
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-1-768x439.webp',
            category: 'Lifestyle',
            title: 'Summer Travel Fashion 2024',
            excerpt: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living...',
            author: 'Youngly',
            date: 'March 3, 2025'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-2-768x439.webp',
            category: 'Design Ideas',
            title: 'Latest Swimsuit Model This Year',
            excerpt: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living...',
            author: 'Youngly',
            date: 'October 23, 2024'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-3-768x439.webp',
            category: 'Healthier Living',
            title: 'The History Of Patterned Dresses',
            excerpt: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living...',
            author: 'Youngly',
            date: 'August 13, 2024'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-4-768x439.webp',
            category: 'Healthier Living',
            title: 'The Shirt Makes Your Style',
            excerpt: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living...',
            author: 'Youngly',
            date: 'July 3, 2024'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-5-768x439.webp',
            category: 'Tips & Tricks',
            title: 'Tips For Wearing Loose T-shirts',
            excerpt: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living...',
            author: 'Youngly',
            date: 'June 23, 2024'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-6-768x439.webp',
            category: 'Home Improvement',
            title: 'Top 5 Picnic Fashion Of Girls',
            excerpt: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living...',
            author: 'Youngly',
            date: 'June 15, 2024'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-7-768x439.webp',
            category: 'Design Ideas',
            title: 'Swimsuits For The Whole Family',
            excerpt: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living...',
            author: 'Youngly',
            date: 'June 8, 2024'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-8-768x439.webp',
            category: 'Trending outfit',
            title: 'Top 10 Trends Of Autumn 2024',
            excerpt: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living...',
            author: 'Youngly',
            date: 'June 8, 2024'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-9-768x439.webp',
            category: 'Lifestyle',
            title: 'The Best Clothing for This Summer',
            excerpt: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living...',
            author: 'Youngly',
            date: 'May 5, 2024'
        },
        {
            image: 'https://wpglozin.com/fashion/wp-content/uploads/sites/2/2025/03/blog-10-768x439.webp',
            category: 'Lifestyle',
            title: 'A Chic Journey Through Fashion Trends',
            excerpt: 'These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living...',
            author: 'Youngly',
            date: 'April 6, 2024'
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <ChevronRight size={14} style={{ margin: '0 5px' }} />
                    <span>Blog</span>
                </div>
                <h1 className={styles.title}>Blog</h1>
                <p className={styles.description}>
                    Explore trends, tips, and inspirations across lifestyle, design, health, home, and fashion
                </p>
            </header>

            <div className={styles.mainContent}>
                <div className={styles.contentArea}>
                    <div className={styles.postGrid}>
                        {posts.map((post, index) => (
                            <BlogPostCard key={index} {...post} />
                        ))}
                    </div>

                    <div className={styles.pagination}>
                        <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                        <button className={styles.pageBtn}>2</button>
                        <button className={styles.pageBtn}>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                <div className={styles.sidebar}>
                    <BlogSidebar />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
