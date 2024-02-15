"use client";

import { IoBagOutline, IoLogInOutline, IoPersonOutline } from "react-icons/io5";
import styles from "./HeaderNav.module.css";
import HeaderNavDropdown from "./HeaderNavDropdown";
import {
  TRIP_CSS_QUIZ,
  useTripCSSStateContext
} from "@/context/TripCSSContext";
import clsx from "clsx";

const HeaderNav = () => {
  const { quiz } = useTripCSSStateContext();

  return (
    <div className={styles.navContainer}>
      <HeaderNavDropdown />
      <div
        id={TRIP_CSS_QUIZ["flex_flexDirection_column"].id}
        className={clsx(styles.iconContainer, {
          ["tripCSSQuiz"]:
            quiz === TRIP_CSS_QUIZ["flex_flexDirection_column"].id
        })}
      >
        <IoLogInOutline size={20} />
        <span className={styles.iconText}>Login</span>
      </div>
      <div className={clsx(styles.iconContainer)}>
        <IoPersonOutline size={20} />
        <span className={styles.iconText}>My Page</span>
      </div>
    </div>
  );
};

export default HeaderNav;
