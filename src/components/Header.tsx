"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const { toggleSidebar, cartItems } = useCart();

    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

            <button
                className={styles.mobileMenuBtn}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

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

                <div className={styles.iconGroup}>
                    <div className={styles.dropdownWrapper}>
                        <button
                            className={styles.actionBtn}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <User size={20} />
                        </button>

                        {isDropdownOpen && (
                            <div className={styles.dropdown}>
                                <h3 className={styles.dropdownTitle}>
                                    {isLogin ? 'Login' : 'Sign Up'}
                                </h3>
                                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                    <div className={styles.inputGroup}>
                                        <label>Email</label>
                                        <input type="email" placeholder="your@email.com" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Password</label>
                                        <input type="password" placeholder="••••••••" />
                                    </div>
                                    {!isLogin && (
                                        <div className={styles.inputGroup}>
                                            <label>Confirm Password</label>
                                            <input type="password" placeholder="••••••••" />
                                        </div>
                                    )}
                                    <button type="submit" className={styles.submitBtn}>
                                        {isLogin ? 'Sign In' : 'Create Account'}
                                    </button>
                                </form>
                                <p className={styles.switchText}>
                                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                                    <span onClick={() => setIsLogin(!isLogin)}>
                                        {isLogin ? 'Sign Up' : 'Login'}
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>

                    <button className={styles.iconBtn} onClick={toggleSidebar}>
                        <ShoppingBag size={20} />
                        {cartItemCount > 0 && (
                            <span className={styles.cartBadge}>{cartItemCount}</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Icons - Visible only on mobile */}
            <div className={styles.mobileIcons}>
                <button
                    className={styles.actionBtn}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <User size={20} />
                </button>
                <button className={styles.iconBtn} onClick={toggleSidebar}>
                    <ShoppingBag size={20} />
                    {cartItemCount > 0 && (
                        <span className={styles.cartBadge}>{cartItemCount}</span>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <nav className={styles.mobileNav}>
                    <Link href="/shop" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Shop</Link>
                    <Link href="/men" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Men</Link>
                    <Link href="/women" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Women</Link>
                    <Link href="/trending" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Trending</Link>
                    <Link href="/seasonal" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Seasonal</Link>
                    <Link href="/accessories" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Accessories</Link>

                    <div className={styles.mobileActionGroup}>
                        <button className={styles.mobileActionBtn} onClick={() => { setIsDropdownOpen(!isDropdownOpen); setIsMenuOpen(false); }}>
                            <User size={20} />
                            <span>Account</span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
