import React from 'react';
import styles from './ShoppableVideos.module.css';

import productsData from '../data/products.json';

const ShoppableVideos: React.FC = () => {
    // Get first 5 products from the data
    const siteProducts = productsData.slice(0, 5);

    const stories = [
        {
            id: 1,
            videoUrl: "https://cdn.dribbble.com/userupload/46086246/file/6f53cc5cd950adc8b1c7a05999262c6f.mp4",
            product: siteProducts[0]
        },
        {
            id: 2,
            videoUrl: "https://cdn.dribbble.com/userupload/13345116/file/original-0be2e82e945c8f7747e6bfcd87579227.mp4",
            product: siteProducts[1]
        },
        {
            id: 3,
            videoUrl: "https://cdn.dribbble.com/userupload/46086246/file/6f53cc5cd950adc8b1c7a05999262c6f.mp4",
            product: siteProducts[2]
        },
        {
            id: 4,
            videoUrl: "https://cdn.dribbble.com/userupload/13345116/file/original-0be2e82e945c8f7747e6bfcd87579227.mp4",
            product: siteProducts[3]
        },
        {
            id: 5,
            videoUrl: "https://cdn.dribbble.com/userupload/46086246/file/6f53cc5cd950adc8b1c7a05999262c6f.mp4",
            product: siteProducts[4]
        }
    ];

    return (
        <section className={styles.shoppableSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Community Stories</h2>
                <p className={styles.subtitle}>Express your style with our standout collection—fashion meets sophistication.</p>
            </div>
            <div className={styles.grid}>
                {stories.map((story) => (
                    <div key={story.id} className={styles.videoCard}>
                        <video
                            src={story.videoUrl}
                            className={styles.videoBg}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <div className={styles.productOverlay}>
                            <div className={styles.productThumb}>
                                <img src={story.product.image} alt={story.product.name} />
                            </div>
                            <div className={styles.productInfo}>
                                <span className={styles.productName}>{story.product.name}</span>
                                <span className={styles.productPrice}>${story.product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShoppableVideos;
