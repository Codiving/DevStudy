"use client";

import clsx from "clsx";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";
import {
  TRIP_CSS_QUIZ,
  useTripCSSStateContext
} from "@/context/TripCSSContext";

const Header = () => {
  const { quiz } = useTripCSSStateContext();

  return (
    <div
      id={TRIP_CSS_QUIZ["margin_가운데_정렬"].id}
      className={clsx(styles.container, {
        ["tripCSSQuiz"]: quiz === TRIP_CSS_QUIZ["margin_가운데_정렬"].id
      })}
    >
      <header
        id={TRIP_CSS_QUIZ["flex_margin_구조"].id}
        className={clsx(styles.header, {
          ["tripCSSQuiz"]: quiz === TRIP_CSS_QUIZ["flex_margin_구조"].id
        })}
      >
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
