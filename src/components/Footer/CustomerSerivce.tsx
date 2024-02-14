import { IoCall } from "react-icons/io5";
import styles from "./CustomerService.module.css";

const CUSTOMER_SERVICE_LIST = [
  {
    text: "국내 여행상담",
    phoneNumber: "1234-1234"
  },
  {
    text: "국내 항공상담",
    phoneNumber: "1234-1235"
  },
  {
    text: "해외 여행상담",
    phoneNumber: "1234-1236"
  },
  {
    text: "해외 항공상담",
    phoneNumber: "1234-1237"
  }
];

export default async function CustomerService() {
  return (
    <>
      {CUSTOMER_SERVICE_LIST.map(({ text, phoneNumber }) => (
        <div key={text}>
          <h6 className={styles.title}>{text}</h6>
          <div className={styles.phoneWrap}>
            <IoCall size={14} />
            <span className={styles.phoneText}>{phoneNumber}</span>
          </div>
        </div>
      ))}
    </>
  );
}
