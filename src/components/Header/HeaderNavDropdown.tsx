import styles from "./HeaderNavDropdown.module.css";

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
  return (
    <nav className={styles.container}>
      <ul className={styles.menu}>
        {CATEGORY_LIST.map((product, index) => {
          const { name, list } = product;
          return (
            <li key={index} className={styles.menuItem}>
              <p className={styles.menuItemText}>{name}</p>
              {!!list.length && (
                <ul className={styles.submenu}>
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
