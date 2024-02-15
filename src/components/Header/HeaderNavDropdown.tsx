"use client";

import {
  TRIP_CSS_QUIZ,
  useTripCSSStateContext
} from "@/context/TripCSSContext";
import styles from "./HeaderNavDropdown.module.css";
import clsx from "clsx";

const CATEGORY_LIST = [
  {
    name: "Asia",
    list: ["Korea", "China", "Japan", "Vietnam"]
  },
  {
    name: "Europe",
    list: ["France", "Germany", "Italy", "Spain"]
  },
  {
    name: "Africa",
    list: ["Nigeria", "Egypt", "South Africa", "Kenya"]
  },
  {
    name: "Americas",
    list: ["United States", "Brazil", "Canada", "Mexico"]
  },
  {
    name: "Oceania",
    list: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"]
  },
  {
    name: "Airline",
    list: [
      "Korean Air",
      "Asiana Airlines",
      "United Airlines",
      "Air France",
      "Lufthansa"
    ]
  },
  {
    name: "Hotel",
    list: [
      "Hotel Out of Africa",
      "Bvlgari Hotel",
      "Penthouse Suite",
      "Palazzo Hotel",
      "Sands Hotel"
    ]
  }
];

const HeaderNavDropdown = () => {
  const { quiz } = useTripCSSStateContext();

  const isHeaderDropdown = quiz === TRIP_CSS_QUIZ["header_dropdown"].id;

  return (
    <nav className={styles.container}>
      <ul
        className={clsx(styles.menu, {
          ["tripCSSQuiz"]: quiz === TRIP_CSS_QUIZ["flex_gap"].id
        })}
      >
        {CATEGORY_LIST.map((product, index) => {
          const { name, list } = product;
          return (
            <li
              id={index === 3 ? TRIP_CSS_QUIZ["header_dropdown"].id : undefined}
              key={index}
              className={clsx(styles.menuItem, {
                ["tripCSSQuiz"]: isHeaderDropdown && index === 3
              })}
            >
              <p className={styles.menuItemText}>{name}</p>
              {!!list.length && (
                <ul
                  className={clsx(styles.submenu, {
                    [styles.submenuQuiz]: isHeaderDropdown && index === 3,
                    ["tripCSSQuiz"]: isHeaderDropdown && index === 3
                  })}
                >
                  {list.map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className={styles.submenuLink}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNavDropdown;
