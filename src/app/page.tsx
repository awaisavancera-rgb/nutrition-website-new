"use client";

import React, { useState } from 'react';
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";
import CategoryCarousel from "@/components/CategoryCarousel";
import PromotionGrid from "@/components/PromotionGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedPromoSection from "@/components/FeaturedPromoSection";
import ShoppableVideos from "@/components/ShoppableVideos";
import TextTestimonials from "@/components/TextTestimonials";
import BlogSection from "@/components/BlogSection";
import styles from "./page.module.css";
import productsData from "@/data/products.json";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  // Get products for the grid based on showAll state
  const displayProducts = showAll ? productsData : productsData.slice(0, 10);
  // Get next 5 products for Featured section
  const featuredProducts = productsData.slice(10, 15);

  return (
    <div className={styles.page}>
      <div className={styles.heroWrapper}>
        <Banner />
      </div>

      <CategoryCarousel />

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>New Arrivals</h2>
          <ShimmerButton
            className={styles.shimmerViewAll}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All"}
          </ShimmerButton>
        </div>
        <div className={styles.grid}>
          {displayProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <PromotionGrid />

      <FeaturedProducts products={featuredProducts} title="Best Sellers" />

      <FeaturedPromoSection />

      <ShoppableVideos />

      <TextTestimonials />

      <BlogSection />
    </div>
  );
}
