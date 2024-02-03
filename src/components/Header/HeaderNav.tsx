import { IoBagOutline, IoLogInOutline, IoPersonOutline } from "react-icons/io5";
import styles from "./HeaderNav.module.css";
import HeaderNavDropdown from "./HeaderNavDropdown";

const HeaderNav = () => {
  return (
    <div className={styles.navContainer}>
      <HeaderNavDropdown />
      <div className={styles.iconContainer}>
        <IoLogInOutline size={20} />
        <span className={styles.iconText}>Login</span>
      </div>
      <div className={styles.iconContainer}>
        <IoPersonOutline size={20} />
        <span className={styles.iconText}>My Page</span>
      </div>
    </div>
  );
};

export default HeaderNav;
