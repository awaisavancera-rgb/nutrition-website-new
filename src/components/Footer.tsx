import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h2 className={styles.logo}>NUTRITION</h2>
                        <p className={styles.description}>
                            Premium supplements and nutrition advice to help you reach your peak performance and live a healthier life.
                        </p>
                        <div className={styles.socials}>
                            {['fb', 'tw', 'ig', 'yt'].map((s) => (
                                <a key={s} href="#" className={styles.socialIcon}>{s}</a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Shop</h3>
                            <a href="#">All Products</a>
                            <a href="#">Best Sellers</a>
                            <a href="#">New Arrivals</a>
                            <a href="#">Supplements</a>
                        </div>
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Company</h3>
                            <a href="#">About Us</a>
                            <a href="#">Our Story</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                        </div>
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Support</h3>
                            <a href="#">Contact Us</a>
                            <a href="#">FAQs</a>
                            <a href="#">Shipping</a>
                            <a href="#">Returns</a>
                        </div>
                    </div>
                    <div className={styles.newsletter}>
                        <h3 className={styles.columnTitle}>Join Our Newsletter</h3>
                        <p className={styles.newsletterText}>Get the latest updates and exclusive offers.</p>
                        <form className={styles.form}>
                            <input type="email" placeholder="Your email address" className={styles.input} />
                            <button type="submit" className={styles.submitBtn}>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copyright}>© 2026 Nutrition Website. All rights reserved.</p>
                    <div className={styles.legal}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
