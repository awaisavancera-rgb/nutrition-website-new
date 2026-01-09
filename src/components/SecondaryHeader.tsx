"use client";

import React from 'react';
import Link from 'next/link';
import styles from './SecondaryHeader.module.css';
import { Search, User, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const SecondaryHeader = () => {
    const { toggleSidebar, cartItems } = useCart();
    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className={styles.header}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.promoText}>
                    <span>Coats—every friday 75% Off.</span>
                    <span className={styles.promoLink}>Shop Sale</span>
                </div>
                <div className={styles.utilityLinks}>
                    <span className={styles.utilityLink}>Help Center</span>
                    <span className={styles.utilityLink}>About Us</span>
                    <span className={styles.utilityLink}>Our Stores</span>
                    <div className={styles.selectors}>
                        <div className={styles.selector}>
                            🇺🇸 United States (USD $) <ChevronDown size={14} />
                        </div>
                        <div className={styles.selector}>
                            English <ChevronDown size={14} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Bar */}
            <div className={styles.mainBar}>
                <div className={styles.logoArea}>
                    <Link href="/">
                        <h1 className={styles.logoText}>VEXO</h1>
                    </Link>
                </div>

                <nav className={styles.navMenu}>
                    <Link href="/" className={styles.navLink}>Home <ChevronDown size={14} /></Link>
                    <Link href="/shop" className={styles.navLink}>Shop <ChevronDown size={14} /></Link>
                    <Link href="/products" className={styles.navLink}>Products <ChevronDown size={14} /></Link>
                    <Link href="/pages" className={styles.navLink}>Pages <ChevronDown size={14} /></Link>
                    <Link href="/blog" className={styles.navLink}>Blog <ChevronDown size={14} /></Link>
                    <Link href="/sale" className={styles.navLink}>
                        Sale <span className={styles.badge}>Hot</span>
                    </Link>
                    <Link href="/buy" className={styles.navLink}>Buy Theme!</Link>
                </nav>

                <div className={styles.actions}>
                    <div className={styles.searchWrapper}>
                        <Search size={18} color="#999" />
                        <input
                            type="text"
                            placeholder="I'm looking for..."
                            className={styles.searchInput}
                        />
                    </div>

                    <button className={styles.iconBtn}>
                        <User size={22} />
                    </button>

                    <button className={styles.iconBtn}>
                        <Heart size={22} />
                        <span className={styles.cartCount}>0</span>
                    </button>

                    <button className={styles.iconBtn} onClick={toggleSidebar}>
                        <ShoppingBag size={22} />
                        {cartItemCount > 0 && (
                            <span className={styles.cartCount}>{cartItemCount}</span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default SecondaryHeader;
