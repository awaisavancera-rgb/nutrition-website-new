import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.heroWrapper}>
        <Banner />
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Premium Quality</h3>
            <p>Sourced from the finest ingredients to ensure maximum potency.</p>
          </div>
          <div className={styles.card}>
            <h3>Lab Tested</h3>
            <p>Every batch is rigorously tested for purity and safety.</p>
          </div>
          <div className={styles.card}>
            <h3>Fast Shipping</h3>
            <p>Get your supplies delivered to your doorstep in no time.</p>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ backgroundColor: '#f0f0f0' }}>
        <h2 className={styles.sectionTitle}>New Arrivals</h2>
        <div className={styles.grid}>
          {/* 1. Light Card, Standard */}
          <ProductCard
            title="Nike Air Max 270"
            price="$139.99"
            category="WOMEN SHOES"
            theme="light"
          />

          {/* 2. Light Card, 10% OFF */}
          <ProductCard
            title="Nike Air Max 270"
            price="$139.99"
            category="WOMEN SHOES"
            theme="light"
            badge="10% OFF"
          />

          {/* 3. Dark Card, Standard */}
          <ProductCard
            title="Nike Air Max 270"
            price="$139.99"
            category="WOMEN SHOES"
            theme="dark"
          />

          {/* 4. Dark Card, 10% OFF */}
          <ProductCard
            title="Nike Air Max 270"
            price="$139.99"
            category="WOMEN SHOES"
            theme="dark"
            badge="10% OFF"
          />

          {/* 5. Dark Card, Quantity Selector */}
          <ProductCard
            title="Nike Air Max 270"
            price="$139.99"
            category="WOMEN SHOES"
            theme="dark"
            showQuantity={true}
          />
        </div>
      </section>
    </div>
  );
}
