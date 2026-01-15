"use client";

import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './CartTable.module.css';

const CartTable: React.FC = () => {
    const { cartItems, updateQuantity, removeItem } = useCart();

    if (cartItems.length === 0) {
        return <div className={styles.emptyCart}>Your cart is empty.</div>;
    }

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.thProduct}>Product</th>
                        <th className={styles.thPrice}>Price</th>
                        <th className={styles.thQuantity}>Quantity</th>
                        <th className={styles.thTotal}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id} className={styles.row}>
                            <td className={styles.tdProduct}>
                                <div className={styles.productInfo}>
                                    <div className={styles.imageWrapper}>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className={styles.details}>
                                        <h4 className={styles.name}>{item.name}</h4>
                                        {item.variant && <p className={styles.variant}>{item.variant}</p>}
                                        <button
                                            className={styles.removeBtn}
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.tdPrice}>
                                ${item.price.toFixed(2)}
                            </td>
                            <td className={styles.tdQuantity}>
                                <div className={styles.quantityControls}>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        −
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className={styles.tdTotal}>
                                ${(item.price * item.quantity).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className={styles.couponSection}>
                <input type="text" placeholder="Coupon code" className={styles.couponInput} />
                <button className={styles.applyBtn}>Apply coupon</button>
            </div>
        </div>
    );
};

export default CartTable;
