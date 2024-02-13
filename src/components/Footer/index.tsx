import styles from "./Footer.module.css";

interface CustomerServiceProps {
  text: string;
  phoneNumber: string;
}

const CUSTOMER_SERVICE_LIST: CustomerServiceProps[] = [
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

const CustomerService = (props: CustomerServiceProps) => {
  const { text, phoneNumber } = props;

  return (
    <div>
      <h6 style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
        {text}
      </h6>
      <span>{phoneNumber}</span>
    </div>
  );
};

export default async function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.wrap}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <h5 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
              고객센터
            </h5>
            <p>연중무휴 09:00 ~ 18:00 (점심 시간 12:00 ~ 13:00)</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 36
            }}
          >
            {CUSTOMER_SERVICE_LIST.map(service => (
              <CustomerService key={service.text} {...service} />
            ))}
          </div>
        </div>
        <div></div>
      </footer>
    </div>
  );
}
