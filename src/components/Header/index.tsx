import { IoMdSearch } from "react-icons/io";
import { IoBagSharp, IoPerson } from "react-icons/io5";
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
          <IoPerson size={22} />
          <IoMdSearch size={22} />
          <IoBagSharp size={22} />
        </div>
      </header>
    </div>
  );
};

export default Header;
