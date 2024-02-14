import styles from "./Sitemap.module.css";

const SITEMAP_LIST = [
  {
    title: "소개",
    items: ["회사 소개", "채용", "공지사항", "조직도"]
  },
  {
    title: "여행지",
    items: ["국가별", "도시별"]
  },
  {
    title: "도움말 · 문의",
    items: ["FAQ", "쿠기 정책", "이용약관"]
  },
  {
    title: "모바일",
    items: ["Android", "iOS"]
  }
];

export default async function Sitemap() {
  return (
    <>
      {SITEMAP_LIST.map(({ title, items }) => (
        <div key={title}>
          <h6 className={styles.title}>{title}</h6>
          <ul>
            {items.map(item => (
              <li key={item} className={styles.listItem}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
