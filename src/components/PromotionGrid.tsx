import React from 'react';
import styles from './PromotionGrid.module.css';

const PromotionGrid: React.FC = () => {
    const promos = [
        {
            id: 1,
            title: "Shop New Beauty & Skincare Arrivals",
            description: "Highlights fresh products and creates immediate buying urgency.",
            image: "/images/promotions/2d5f67080b8a74c2f6d877ac2dc6fbef.jpg",
            link: "#",
            btnText: "Shop Now"
        },
        {
            id: 2,
            title: "Find Your Perfect Routine",
            description: "Highlights fresh products and creates immediate buying urgency.",
            image: "/images/promotions/84bf385e3dfd9e61d9a52c04a0e84745.jpg",
            link: "#",
            btnText: "Find More"
        },
        {
            id: 3,
            title: "Unlock 15% Off Your First Order",
            description: "Highlights fresh products and creates immediate buying urgency.",
            image: "/images/promotions/fbd3f0b00e58685c89c5eff646797dd5.jpg",
            link: "#",
            btnText: "Get 15% Discount"
        }
    ];

    return (
        <section className={styles.promotionSection}>
            <div className={styles.grid}>
                {promos.map((promo) => (
                    <div key={promo.id} className={styles.promoCard}>
                        <img src={promo.image} alt={promo.title} className={styles.bgImage} />
                        <div className={styles.infoCard}>
                            <h2 className={styles.title}>{promo.title}</h2>
                            <p className={styles.description}>{promo.description}</p>
                            <a href={promo.link} className={styles.cta}>
                                {promo.btnText}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrow}>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromotionGrid;
