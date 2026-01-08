import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { ShimmerButton } from './ui/shimmer-button';

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            {/* The SVG Cutout Overlay - Matches the body background color */}
            <div className={styles.topCutout}>
                <svg width="100%" height="100%" viewBox="0 0 600 110" preserveAspectRatio="none">
                    <path
                        d="M0,0 L50,0 Q60,0 65,5 L165,105 Q170,110 180,110 L420,110 Q430,110 435,105 L535,5 Q540,0 550,0 L600,0 L600,-100 L0,-100 Z"
                        fill="#fff"
                    />
                </svg>
            </div>

            <div className={styles.navSection}>
                <Link href="/shop" className={styles.navLink}>Shop</Link>
                <Link href="/men" className={styles.navLink}>Men</Link>
                <Link href="/women" className={styles.navLink}>Women</Link>
                <Link href="/trending" className={styles.navLink}>Trending</Link>
            </div>

            <div className={styles.logoArea}>
                <h1 className={styles.logoText}>VEXO</h1>
            </div>

            <div className={styles.navSection}>
                <Link href="/seasonal" className={styles.navLink}>Seasonal</Link>
                <Link href="/accessories" className={styles.navLink}>Accessories</Link>
                <ShimmerButton className={styles.shimmerActionBtn}>SIGN IN / UP</ShimmerButton>
                <ShimmerButton className={styles.shimmerIconBtn}>
                    {/* Simple Lock/Bag Icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </ShimmerButton>
            </div>
        </header>
    );
};

export default Header;
