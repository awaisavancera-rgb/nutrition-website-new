"use client";

import React from 'react';
import styles from './ShopToolbar.module.css';

const ShopToolbar = () => {
    return (
        <div className={styles.toolbar}>
            <div className={styles.left}>
                <span className={styles.resultsCount}>There are 25 results in total</span>
                <div className={styles.viewSwitcher}>
                    <button className={`${styles.viewBtn} ${styles.active}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                        </svg>
                    </button>
                    <button className={styles.viewBtn}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="3" y="3" width="18" height="2" />
                            <rect x="3" y="8" width="18" height="2" />
                            <rect x="3" y="13" width="18" height="2" />
                            <rect x="3" y="18" width="18" height="2" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.sortBy}>
                    Sort by:
                    <select className={styles.select}>
                        <option>Date, new to old</option>
                        <option>Price, low to high</option>
                        <option>Price, high to low</option>
                        <option>Best Selling</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ShopToolbar;
