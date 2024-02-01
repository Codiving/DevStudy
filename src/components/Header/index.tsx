import { IoBagOutline, IoLogInOutline, IoPersonOutline } from "react-icons/io5";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <span className={styles.logoText1}>CSS</span>
          <span className={styles.logoText2}>Makeup</span>
        </div>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li>1번 브랜드</li>
              <li>2번 브랜드</li>
              <li>3번 브랜드</li>
              <li>4번 브랜드</li>
              <li>5번 브랜드</li>
            </ul>
          </nav>
          <div className={styles.iconContainer}>
            <IoLogInOutline size={20} />
            <span className={styles.iconText}>로그인</span>
          </div>
          <div className={styles.iconContainer}>
            <IoPersonOutline size={20} />
            <span className={styles.iconText}>마이페이지</span>
          </div>
          <div className={styles.iconContainer}>
            <IoBagOutline size={20} />
            <span className={styles.iconText}>장바구니</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
