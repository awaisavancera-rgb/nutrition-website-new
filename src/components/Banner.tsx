import React from 'react';
import styles from './Banner.module.css';
import { ShimmerButton } from './ui/shimmer-button';

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <h1 className={styles.mainTitle}>
                FUEL YOUR PEAK<br />
                PERFORMANCE
            </h1>

            <div className={styles.buttonGroup}>
                <ShimmerButton className={styles.shimmerBtn}>SHOP NOW</ShimmerButton>
                <button className={styles.btnSecondary}>EXPLORE ALL</button>
            </div>

            <div className={styles.heroImageContainer}>
                {/* Background Gradient Arch */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #ccc, #999)',
                    borderRadius: '20rem 20rem 0 0',
                    zIndex: 1
                }}></div>

                {/* Image on top - No masking */}
                <img
                    src="/bannner-hero-image.webp"
                    alt="Fitness Model"
                    className={styles.heroImage}
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transform: 'scale(1.1) translateY(-20px)' /* Slight pop-out effect if needed, or just normal */
                    }}
                />
            </div>

            <div className={styles.floatingAvatars}>
                <div className={styles.avatarGroup}>
                    <div className={styles.avatar} style={{ background: '#555' }}></div>
                    <div className={styles.avatar} style={{ background: '#777' }}></div>
                    <div className={styles.avatar} style={{ background: '#999' }}></div>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#555', maxWidth: '200px' }}>
                    Stay cozy without compromising your range of motion. Our women's winter range is perfect.
                </p>
            </div>

            <div className={styles.floatingVideo}>
                {/* Video Placeholder */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                }}>
                    ▶
                </div>
            </div>
        </div>
    );
};

export default Banner;
