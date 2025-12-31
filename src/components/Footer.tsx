import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <h3>Nutrition Supplies</h3>
                    <p>Your trusted source for premium supplements.</p>
                </div>
                <div className={styles.column}>
                    <h3>Shop</h3>
                    <ul>
                        <li>Proteins</li>
                        <li>Vitamins</li>
                        <li>Pre-workout</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Support</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Shipping Policy</li>
                        <li>Returns</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Nutrition Supplies. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
