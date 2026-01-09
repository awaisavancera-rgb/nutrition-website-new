"use client";

import React from 'react';
import styles from './BlogPostCard.module.css';

interface BlogPostCardProps {
    image: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ image, category, title, excerpt, author, date }) => {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
                <span className={styles.category}>{category}</span>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.excerpt}>{excerpt}</p>
                <div className={styles.meta}>
                    <span className={styles.author}>Post by <span>{author}</span></span>
                    <span className={styles.date}>{date}</span>
                </div>
            </div>
        </article>
    );
};

export default BlogPostCard;
