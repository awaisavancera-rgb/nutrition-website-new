"use client";

import React from 'react';
import styles from './page.module.css';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const ContactPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent! We will get back to you soon.');
    };

    return (
        <main className={styles.contactPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Get in <span>Touch</span></h1>
                    <p className={styles.heroSubtitle}>Have questions? We're here to help you on your journey to better health.</p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            <h2 className={styles.sectionTitle}>Contact Information</h2>
                            <p className={styles.infoText}>Fill out the form and our team will get back to you within 24 hours.</p>

                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}><Phone size={20} /></div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+1 (973) 435-3638</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}><Mail size={20} /></div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>info@glozinstore.com</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}><MapPin size={20} /></div>
                                    <div>
                                        <h4>Address</h4>
                                        <p>123 Nutrition Way, Health City, CA 90210</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}><Clock size={20} /></div>
                                    <div>
                                        <h4>Working Hours</h4>
                                        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.socials}>
                                <h4>Follow Us</h4>
                                <div className={styles.socialIcons}>
                                    <a href="#">FB</a>
                                    <a href="#">TW</a>
                                    <a href="#">IG</a>
                                    <a href="#">YT</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.contactFormWrapper}>
                            <form className={styles.contactForm} onSubmit={handleSubmit}>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" placeholder="John Doe" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" placeholder="john@example.com" required />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" placeholder="How can we help?" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" placeholder="Your message here..." required></textarea>
                                </div>
                                <ShimmerButton type="submit" className={styles.submitBtn}>
                                    <Send size={18} style={{ marginRight: '8px' }} />
                                    Send Message
                                </ShimmerButton>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className={styles.mapSection}>
                <div className={styles.container}>
                    <div className={styles.mapWrapper}>
                        {/* Placeholder for Map */}
                        <div className={styles.mapPlaceholder}>
                            <MapPin size={48} />
                            <p>Interactive Map Integration</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
