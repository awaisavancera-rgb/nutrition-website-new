import React from 'react';
import styles from './page.module.css';
import { Target, Heart, Shield, Zap } from 'lucide-react';

const AboutPage = () => {
    return (
        <main className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Empowering Your <br /><span>Peak Performance</span></h1>
                    <p className={styles.heroSubtitle}>We provide the science-backed nutrition you need to reach your goals and live a healthier, more vibrant life.</p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className={styles.story}>
                <div className={styles.container}>
                    <div className={styles.storyGrid}>
                        <div className={styles.storyImage}>
                            <img src="/fitness_models_dark_gear.png" alt="Our Story" />
                        </div>
                        <div className={styles.storyContent}>
                            <h2 className={styles.sectionTitle}>Our Story</h2>
                            <p className={styles.text}>
                                Founded in 2020, Nutrition Supplies began with a simple mission: to bridge the gap between professional-grade supplements and everyday health enthusiasts. We realized that the market was flooded with products that promised much but delivered little.
                            </p>
                            <p className={styles.text}>
                                Our journey started in a small lab with a team of dedicated nutritionists and athletes. Today, we are proud to serve thousands of customers worldwide, providing them with the highest quality, transparently sourced supplements.
                            </p>
                            <div className={styles.stats}>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>50k+</span>
                                    <span className={styles.statLabel}>Happy Customers</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>100+</span>
                                    <span className={styles.statLabel}>Premium Products</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>15+</span>
                                    <span className={styles.statLabel}>Years Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className={styles.values}>
                <div className={styles.container}>
                    <div className={styles.valuesHeader}>
                        <h2 className={styles.sectionTitle}>Our Mission & Values</h2>
                        <p className={styles.sectionSubtitle}>Everything we do is guided by our commitment to your health and performance.</p>
                    </div>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}><Target size={32} /></div>
                            <h3>Quality First</h3>
                            <p>We never compromise on ingredients. Every product is rigorously tested for purity and potency.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}><Heart size={32} /></div>
                            <h3>Customer Centric</h3>
                            <p>Your goals are our goals. We provide personalized support to help you succeed on your journey.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}><Shield size={32} /></div>
                            <h3>Transparency</h3>
                            <p>No proprietary blends. We tell you exactly what's in our products and why it's there.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}><Zap size={32} /></div>
                            <h3>Innovation</h3>
                            <p>We stay at the forefront of nutritional science to bring you the most effective formulas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whyChoose}>
                <div className={styles.container}>
                    <div className={styles.whyGrid}>
                        <div className={styles.whyContent}>
                            <h2 className={styles.sectionTitle}>Why Choose Nutrition Supplies?</h2>
                            <ul className={styles.whyList}>
                                <li>
                                    <strong>Science-Backed Formulas:</strong> Every ingredient is chosen based on clinical research.
                                </li>
                                <li>
                                    <strong>Premium Sourcing:</strong> We partner with the world's best suppliers for raw materials.
                                </li>
                                <li>
                                    <strong>Fast & Free Shipping:</strong> Get your supplements when you need them, without extra cost.
                                </li>
                                <li>
                                    <strong>Satisfaction Guaranteed:</strong> If you're not happy, we'll make it right.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.whyImage}>
                            <img src="/hero-product.png" alt="Why Choose Us" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
