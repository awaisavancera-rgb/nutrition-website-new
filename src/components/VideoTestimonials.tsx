import React from 'react';
import styles from './VideoTestimonials.module.css';

const VideoTestimonials: React.FC = () => {
    return (
        <section className={styles.videoSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Real Results, Real People</h2>
                <p className={styles.subtitle}>Watch how our products have transformed lives.</p>
            </div>
            <div className={styles.grid}>
                {[1, 2, 3].map((i) => (
                    <div key={i} className={styles.videoCard}>
                        <div className={styles.placeholder}>
                            <div className={styles.playBtn}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span className={styles.placeholderText}>Video Testimonial {i}</span>
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>Customer Name {i}</h3>
                            <p className={styles.result}>"Amazing transformation in just 3 months!"</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoTestimonials;
