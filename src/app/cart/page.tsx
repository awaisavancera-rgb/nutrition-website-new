"use client";

import React from 'react';
import styles from './page.module.css';
import CartTable from '@/components/CartTable';
import CartSummary from '@/components/CartSummary';
import { useCart } from '@/context/CartContext';
import { MessageSquare, ShieldCheck, Lock } from 'lucide-react';

const CartPage = () => {
    const { cartItems } = useCart();

    // Mock data for "You may also like"
    const recommendations = [
        { id: 'rec1', name: 'LH75—Active Noise-Cancelling Headphones', price: 150.00, image: '/fitness_models_dark_gear.png' },
        { id: 'rec2', name: 'Earbuds—Bluetooth Noise Cancelling', price: 175.00, oldPrice: 195.00, image: '/fitness_models_dark_gear.png' },
    ];

    return (
        <main className={styles.cartPage}>
            <div className={styles.container}>
                {/* Breadcrumbs */}
                <nav className={styles.breadcrumbs}>
                    <a href="/">Home</a>
                    <span>•</span>
                    <a href="/shop">Shop</a>
                    <span>•</span>
                    <span className={styles.current}>Shopping Cart</span>
                </nav>

                <h1 className={styles.title}>Shopping Cart</h1>
                <p className={styles.subtitle}>Review your selected items before purchase. Enjoy a seamless shopping experience!</p>

                <div className={styles.contentGrid}>
                    <div className={styles.mainContent}>
                        <CartTable />

                        {/* Trust Badges */}
                        <div className={styles.trustBadges}>
                            <div className={styles.badge}>
                                <div className={styles.icon}>
                                    <MessageSquare size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h5>Have Questions?</h5>
                                    <p>Our experts are here to help! Call us free.</p>
                                </div>
                            </div>
                            <div className={styles.badge}>
                                <div className={styles.icon}>
                                    <ShieldCheck size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h5>Secure Shopping</h5>
                                    <p>All transactions are protected by SSL technology.</p>
                                </div>
                            </div>
                            <div className={styles.badge}>
                                <div className={styles.icon}>
                                    <Lock size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h5>Privacy Protection</h5>
                                    <p>Your privacy is always our top priority.</p>
                                </div>
                            </div>
                        </div>

                        {/* Recommendations */}
                        <div className={styles.recommendations}>
                            <h3 className={styles.recTitle}>You may also like...</h3>
                            <div className={styles.recGrid}>
                                {recommendations.map((item) => (
                                    <div key={item.id} className={styles.recCard}>
                                        <div className={styles.recImage}>
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className={styles.recInfo}>
                                            <h4 className={styles.recName}>{item.name}</h4>
                                            <p className={styles.recPrice}>
                                                ${item.price.toFixed(2)}
                                                {item.oldPrice && <span className={styles.oldPrice}>${item.oldPrice.toFixed(2)}</span>}
                                            </p>
                                            <button className={styles.selectOptions}>Select options</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className={styles.sidebar}>
                        <CartSummary />
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default CartPage;
