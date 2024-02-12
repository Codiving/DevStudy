/* eslint-disable @next/next/no-img-element */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import styles from "./MilkyWay.module.css";

const MILKY_WAY_IMAGES = [
  {
    src: "/tripCSS/MilkyWay/MilkyWay1.jpg"
  },
  {
    src: "/tripCSS/MilkyWay/MilkyWay2.jpg"
  }
];

export default async function MilkyWay() {
  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        {MILKY_WAY_IMAGES.map(({ src }) => {
          return (
            <div key={src} className={styles.imgWrap}>
              <img src={src} alt={"MilkyWay"} className={styles.img} />
            </div>
          );
        })}
        <div className={styles.infoContainer}>
          <div className={styles.infoDescription}>
            <h3>은하수 인기 스팟 알아보기</h3>
            <p>
              리뷰가 <strong>4.5점</strong> 이 넘는 은하수를 볼 수 있는
              여행지입니다.
            </p>
            <p>
              지금 확인 후 예약하면 최대 <strong>50%</strong> 할인
            </p>
          </div>
          <div className={styles.starContainer}>
            <div>
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStarHalfAlt color="yellow" />
            </div>
            <button>자세히</button>
          </div>
        </div>
      </div>
    </section>
  );
}
