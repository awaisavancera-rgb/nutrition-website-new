"use client";

import React from 'react';
import { X, Minus, Plus, Trash2, Calendar, Settings, Box } from 'lucide-react';
import { useCart } from '../context/CartContext';
import styles from './CartSidebar.module.css';

const CartSidebar = () => {
    const {
        cartItems,
        removeItem,
        updateQuantity,
        isSidebarOpen,
        toggleSidebar,
        subtotal
    } = useCart();

    if (!isSidebarOpen) return null;

    return (
        <div className={styles.overlay} onClick={toggleSidebar}>
            <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Shopping Cart</h2>
                    <button className={styles.closeBtn} onClick={toggleSidebar}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.content}>
                    {cartItems.length === 0 ? (
                        <div className={styles.emptyCart}>
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        <div className={styles.itemList}>
                            {cartItems.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.itemImage}>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h3 className={styles.itemName}>{item.name}</h3>
                                        <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>

                                        <div className={styles.itemActions}>
                                            <div className={styles.qtyControl}>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className={styles.qtyBtn}
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className={styles.qtyValue}>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className={styles.qtyBtn}
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <button
                                                className={styles.removeBtn}
                                                onClick={() => removeItem(item.id)}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles.footer}>
                    <div className={styles.footerIcons}>
                        <button className={styles.footerIconBtn}>
                            <Calendar size={20} />
                        </button>
                        <button className={styles.footerIconBtn}>
                            <Settings size={20} />
                        </button>
                        <button className={styles.footerIconBtn}>
                            <Box size={20} />
                        </button>
                    </div>

                    <div className={styles.subtotalRow}>
                        <span className={styles.subtotalLabel}>Subtotal:</span>
                        <span className={styles.subtotalValue}>${subtotal.toFixed(2)}</span>
                    </div>

                    <div className={styles.actionButtons}>
                        <button className={styles.viewCartBtn}>View cart</button>
                        <button className={styles.checkoutBtn}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
