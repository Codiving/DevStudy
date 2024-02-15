"use client";

import clsx from "clsx";
import { useState } from "react";
import { TiPin, TiPinOutline } from "react-icons/ti";
import styles from "./QuizNav.module.css";
import {
  QUIZ_ID_LIST,
  useTripCSSDispatchContext,
  useTripCSSStateContext
} from "@/context/TripCSSContext";

export default function QuizNav() {
  const { quiz } = useTripCSSStateContext();
  const dispatch = useTripCSSDispatchContext();

  const [fixed, setFixed] = useState(false);

  return (
    <nav>
      <ul
        className={clsx(styles.ul, {
          [styles.fixed]: fixed
        })}
      >
        {QUIZ_ID_LIST.map((id, index) => {
          return (
            <li
              key={id}
              className={clsx(styles.link, {
                [styles.currentQuiz]: quiz === id
              })}
              onClick={() => {
                const newQuizId = quiz === id ? null : id;

                dispatch({
                  type: "SET_QUIZ",
                  value: newQuizId
                });
              }}
            >
              {index}
            </li>
          );
        })}
        <li
          key={"Pin"}
          className={styles.link}
          onClick={() => {
            setFixed(prev => !prev);
          }}
        >
          {fixed ? <TiPin /> : <TiPinOutline />}
        </li>
      </ul>
    </nav>
  );
}
