import { RiHeadphoneFill } from "react-icons/ri";
import styles from "./Footer.module.css";
import CustomerService from "./CustomerSerivce";
import Sitemap from "./Sitemap";

export default async function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.wrap}>
        <div className={styles.csContainer}>
          <div>
            <div className={styles.csContainerTitleWrap}>
              <RiHeadphoneFill />
              <h5 className={styles.csContainerTitle}>고객센터</h5>
            </div>
            <p className={styles.csContainerDescription}>
              연중무휴 09:00 ~ 18:00 (점심 시간 12:00 ~ 13:00)
            </p>
          </div>
          <div className={styles.ccPhoneNumberList}>
            <CustomerService />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <Sitemap />
        </div>
      </footer>
    </div>
  );
}
