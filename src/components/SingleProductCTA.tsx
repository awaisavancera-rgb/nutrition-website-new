import React from 'react';
import styles from './SingleProductCTA.module.css';

const SingleProductCTA: React.FC = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src="/images/promotions/featured_cta.png" alt="Featured Product" className={styles.image} />
                </div>
                <div className={styles.content}>
                    <span className={styles.badge}>Featured Product</span>
                    <h2 className={styles.title}>Ultimate Performance Booster</h2>
                    <p className={styles.description}>
                        Experience the next level of energy and focus with our scientifically formulated performance booster. Designed for athletes who demand the best.
                    </p>
                    <div className={styles.priceWrapper}>
                        <span className={styles.price}>$49.99</span>
                        <span className={styles.oldPrice}>$69.99</span>
                    </div>
                    <button className={styles.buyBtn}>Buy Now - Save 30%</button>
                </div>
            </div>
        </section>
    );
};

export default SingleProductCTA;
