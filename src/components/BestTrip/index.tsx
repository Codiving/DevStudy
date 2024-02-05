/* eslint-disable @next/next/no-img-element */
import styles from "./BestTrip.module.css";

export default async function BestTrip() {
  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        <h3 className={styles.title}>인기 여행지</h3>
        <div className={styles.description}>
          <p>
            이번 달 호텔 예약이 가장 많은 여행지는 <em>일본</em> 입니다.
          </p>
          <p>
            지금 예약 시 호텔 최대 <em>70%</em> 할인
          </p>
        </div>
        <div className={styles.bestProductsWrap}>
          <div className={styles.frame}>
            <div className={`${styles.frameItem} ${styles.item1}`}>
              <div className={`${styles.img} ${styles.img1}`} />
            </div>
            <div className={`${styles.frameItem} ${styles.item2}`}>
              <div className={`${styles.img} ${styles.img2}`} />
            </div>
            <div className={styles.frameItem}>
              <div className={`${styles.img} ${styles.img3}`} />
            </div>
            <div className={styles.frameItem}>
              <div className={`${styles.img} ${styles.img4}`} />
            </div>
            <div className={styles.frameItem}>
              <div className={`${styles.img} ${styles.img5}`} />
            </div>
            <div className={styles.frameItem}>
              <div className={`${styles.img} ${styles.img6}`} />
            </div>
            <div className={styles.frameItem}>
              <div className={`${styles.img} ${styles.img7}`} />
            </div>
            <div className={`${styles.frameItem} ${styles.item3}`}>
              <div className={`${styles.img} ${styles.img8}`} />
            </div>
            <div className={styles.frameItem}>
              <div className={`${styles.img} ${styles.img9}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
