import { IoArrowUp } from "react-icons/io5";
import styles from "./Floating.module.css";

const Floating = () => {
  return (
    <aside className={styles.container}>
      <IoArrowUp className={styles.button} size={24} />
    </aside>
  );
};

export default Floating;
