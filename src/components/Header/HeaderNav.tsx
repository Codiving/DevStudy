import { IoBagOutline, IoLogInOutline, IoPersonOutline } from "react-icons/io5";
import styles from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
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
  );
};

export default HeaderNav;
