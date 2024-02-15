"use client";

import clsx from "clsx";
import { useState } from "react";
import { TiPin, TiPinOutline } from "react-icons/ti";
import styles from "./QuizNav.module.css";
import { QUIZ_ID_LIST } from "@/context/TripCSSContext";

const QUIZ_LIST = [...QUIZ_ID_LIST, "Pin"];

export default function QuizNav() {
  const [fixed, setFixed] = useState(false);

  return (
    <nav>
      <ul
        className={clsx(styles.ul, {
          [styles.fixed]: fixed
        })}
      >
        {QUIZ_LIST.map((id, index) => {
          if (id === "Pin") {
            return (
              <li
                key={id}
                className={styles.link}
                onClick={() => {
                  setFixed(prev => !prev);
                }}
              >
                {fixed ? <TiPin /> : <TiPinOutline />}
              </li>
            );
          }
          return (
            <li key={id} className={styles.link}>
              {index}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
