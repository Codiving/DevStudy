import { IoBulbOutline } from "react-icons/io5";
import styles from "./BulbIcon.module.css";

const BulbIcon = () => {
  return (
    <IoBulbOutline
      className={styles.vibrator}
      color="green"
      size={24}
      strokeWidth={3}
    />
  );
};

export default BulbIcon;
