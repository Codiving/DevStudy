import styles from "./HeaderNavDropdown.module.css";

const PRODUCT_LIST: Product[] = [
  { name: "Blush", categories: ["Powder", "Cream"] },
  { name: "Bronzer", categories: ["Powder"] },
  { name: "Eyebrow", categories: ["Pencil"] },
  { name: "Eyeliner", categories: ["Liquid", "Pencil", "Gel", "Cream"] },
  { name: "Eyeshadow", categories: ["Palette", "Pencil", "Cream"] },
  {
    name: "Foundation",
    categories: [
      "Concealer",
      "Liquid",
      "Contour",
      "Bb cc",
      "Cream",
      "Mineral",
      "Powder",
      "Highlighter"
    ]
  },
  { name: "Lip liner", categories: ["Pencil"] },
  {
    name: "Lipstick",
    categories: ["Lipstick", "Lip gloss", "Liquid", "Lip stain"]
  }
];

const HeaderNavDropdown = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.menu}>
        {PRODUCT_LIST.map((product, index) => {
          const { name, categories } = product;
          return (
            <li key={index} className={styles.menuItem}>
              <p className={styles.menuItemText}>{name}</p>
              {!!categories.length && (
                <ul className={styles.submenu}>
                  {categories.map((category, idx) => (
                    <li key={idx}>
                      <a href="#" className={styles.submenuLink}>
                        {category}
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
