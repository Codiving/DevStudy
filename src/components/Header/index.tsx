import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <span className={styles.logoText1}>Trip</span>
          <span className={styles.logoText2}>CSS</span>
        </div>
        <HeaderNav />
      </header>
    </div>
  );
};

export default Header;
