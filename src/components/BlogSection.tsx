import React from 'react';
import styles from './BlogSection.module.css';
import { ShimmerButton } from './ui/shimmer-button';

const BlogSection: React.FC = () => {
    const posts = [
        {
            id: 1,
            title: "The Science of Muscle Recovery",
            excerpt: "Learn how nutrition plays a crucial role in repairing muscle tissue after intense workouts.",
            image: "/images/blog/blog1.png",
            date: "Jan 15, 2026",
            author: "Dr. Amy Smith"
        },
        {
            id: 2,
            title: "5 Myths About Supplements",
            excerpt: "We debunk common misconceptions about dietary supplements and what you really need.",
            image: "/images/blog/blog2.png",
            date: "Jan 12, 2026",
            author: "John Doe"
        },
        {
            id: 3,
            title: "Mindful Eating for Better Health",
            excerpt: "Discover how being present during meals can improve your digestion and relationship with food.",
            image: "/images/blog/blog3.png",
            date: "Jan 10, 2026",
            author: "Jane Wilson"
        }
    ];

    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>From Our Blog</h2>
                    <ShimmerButton className={styles.shimmerViewAll}>Read All Posts</ShimmerButton>
                </div>
                <div className={styles.grid}>
                    {posts.map((post) => (
                        <article key={post.id} className={styles.postCard}>
                            <div className={styles.imageWrapper}>
                                <img src={post.image} alt={post.title} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.date}>{post.date}</span>
                                    <span className={styles.dot}>•</span>
                                    <span className={styles.author}>{post.author}</span>
                                </div>
                                <h3 className={styles.postTitle}>{post.title}</h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <a href="#" className={styles.readMore}>Read More</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
