/* eslint-disable @next/next/no-img-element */
import styles from "./BestTripCountry.module.css";

const PRODUCTS = [
  {
    src: "/tripCSS/BestTripCountry/Osaka.jpg",
    name: "오사카"
  },
  {
    src: "/tripCSS/BestTripCountry/Sydney.jpg",
    name: "시드니"
  },
  {
    src: "/tripCSS/BestTripCountry/TheEiffelTower.jpg",
    name: "파리"
  },
  {
    src: "/tripCSS/BestTripCountry/TheStatueOfLiberty.jpg",
    name: "뉴욕"
  }
];

export default async function BestTripCountry() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>인기 여행지</h3>
      <div className={styles.bestProductsWrap}>
        {PRODUCTS.map(product => {
          const { src, name } = product;
          return (
            <a key={src} href="#">
              <div className={styles.imgWrap}>
                <img src={src} alt={name} className={styles.productImg} />
                <div className={styles.productInfo}>
                  <span className={styles.name}>{name}</span>
                  <button className={styles.more}>더보기</button>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
