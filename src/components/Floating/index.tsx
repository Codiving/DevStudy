"use client";

import { useCallback } from "react";
import { IoArrowUp } from "react-icons/io5";
import styles from "./Floating.module.css";

const Floating = () => {
  const onMoveTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <aside className={styles.container} onClick={onMoveTop}>
      <IoArrowUp className={styles.button} size={24} />
    </aside>
  );
};

export default Floating;
