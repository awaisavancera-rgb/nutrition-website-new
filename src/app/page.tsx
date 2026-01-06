import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";
import CategoryCarousel from "@/components/CategoryCarousel";
import styles from "./page.module.css";
import products from "@/data/products.json";

export default function Home() {
  // Get first 10 products for the grid
  const displayProducts = products.slice(0, 10);

  return (
    <div className={styles.page}>
      <div className={styles.heroWrapper}>
        <Banner />
      </div>

      <CategoryCarousel />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>New Arrivals</h2>
        <div className={styles.grid}>
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product as any}
              theme="light"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
