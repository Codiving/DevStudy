type ProductName =
  | "Blush"
  | "Bronzer"
  | "Eyebrow"
  | "Eyeliner"
  | "Eyeshadow"
  | "Foundation"
  | "Lip liner"
  | "Lipstick"
  | "Mascara"
  | "Nail polish";

type Category =
  | "Powder"
  | "Cream"
  | "Pencil"
  | "Liquid"
  | "Gel"
  | "Palette"
  | "Concealer"
  | "Contour"
  | "Bb cc"
  | "Mineral"
  | "Highlighter"
  | "Lipstick"
  | "Lip gloss"
  | "Lip stain";

interface Product {
  name: ProductName;
  categories: Category[];
}
