"use client";

import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './CartSummary.module.css';
import { ShimmerButton } from './ui/shimmer-button';

const CartSummary: React.FC = () => {
    const { subtotal } = useCart();
    const shipping = 0; // Free shipping in design
    const total = subtotal + shipping;

    return (
        <div className={styles.summaryContainer}>
            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Add Order Note</h4>
                <textarea
                    placeholder="Add Order Note"
                    className={styles.noteArea}
                ></textarea>
            </div>

            <div className={styles.totalsSection}>
                <h3 className={styles.cartTotalsTitle}>Cart totals</h3>
                <div className={styles.row}>
                    <span>Subtotal</span>
                    <span className={styles.amount}>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.row}>
                    <span>Shipping</span>
                    <span className={styles.shippingText}>Free shipping</span>
                </div>
                <div className={styles.shippingDetail}>
                    Shipping to <strong>CA</strong>.
                    <button className={styles.changeAddress}>Change address</button>
                </div>
                <div className={`${styles.row} ${styles.totalRow}`}>
                    <span>Total</span>
                    <span className={styles.totalAmount}>${total.toFixed(2)}</span>
                </div>
                <ShimmerButton className={styles.checkoutBtn}>
                    Proceed to checkout
                </ShimmerButton>
            </div>

            <div className={styles.deliveryInfo}>
                <h4 className={styles.infoTitle}>Delivery Information</h4>
                <p>Free returns within 15 days, please make sure the items are in undamaged condition.</p>

                <h4 className={styles.infoTitle}>Up to 30-Day Guarantee</h4>
                <p>Bad luck with your tights? Simply contact us within 30 days of receiving your order and we will replace them for free!</p>

                <h4 className={styles.infoTitle}>Payment Support</h4>
                <div className={styles.paymentIcons}>
                    <img src="/payment-icons.png" alt="Payment Methods" />
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
