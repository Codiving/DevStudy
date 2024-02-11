"use client";

import clsx from "clsx";
import { useState } from "react";
import { TiPin, TiPinOutline } from "react-icons/ti";
import styles from "./QuizNav.module.css";

const QUIZ_ID_LIST = [
  "d0aead72-5a53-4aa1-8643-06c3b94f2e25",
  "582d3f7c-ff9b-4b9a-af6b-87f37f52b4e4",
  "0d0fd76e-df2d-4d58-a2cf-55a43fe1c348",
  "8945eb61-0b92-4eae-b7e8-34644bcf9f24",
  "7f4fb715-d92a-4e23-aa61-84acdc9a78fd",
  "f3d1e11e-358b-474e-a9a1-2595151d2cf6",
  "0dc16ad1-015d-462b-845d-5a7d486d55f1",
  "21fe3f92-3726-4c5a-9db0-d8f2c0b5c2e2",
  "f8616dc5-82dc-4e77-b849-2f684b3c57bf",
  "a68dfc7f-3a04-4a2d-80f8-f10a328fb6fb",
  "Pin"
];

export default function QuizNav() {
  const [fixed, setFixed] = useState(false);

  return (
    <nav>
      <ul
        className={clsx(styles.ul, {
          [styles.fixed]: fixed
        })}
      >
        {QUIZ_ID_LIST.map((id, index) => {
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
