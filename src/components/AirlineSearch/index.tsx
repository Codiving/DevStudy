"use client";

import clsx from "clsx";
import { useState } from "react";
import { FaHotel } from "react-icons/fa6";
import { IoAirplane, IoSearch } from "react-icons/io5";
import { MdOutlineFlightLand, MdOutlineFlightTakeoff } from "react-icons/md";
import styles from "./AirlineSearch.module.css";

type Ticket = "flight" | "flightHotel";
type FlightOption = "roundTrip" | "oneWay" | "multiCity";

export default function AirlineSearch() {
  const [ticket, setTicket] = useState<Ticket>("flight");
  const [flightOption, setFlightOption] = useState<FlightOption>("roundTrip");

  return (
    <section className={styles.container}>
      <div className={styles.searchContainer}>
        <div className={styles.searchWrap}>
          <div className={styles.searchTypeWrap}>
            <div className={styles.searchType}>
              <button
                className={clsx(styles.airplaneTypeBtn, {
                  [styles.airplaneTypeBtnSelected]: ticket === "flight"
                })}
                onClick={() => {
                  setTicket("flight");
                }}
              >
                <IoAirplane />
                항공권
              </button>
              <button
                className={clsx(styles.airplaneTypeBtn, {
                  [styles.airplaneTypeBtnSelected]: ticket === "flightHotel"
                })}
                onClick={() => {
                  setTicket("flightHotel");
                }}
              >
                <IoAirplane />
                항공권 +
                <FaHotel />
                호텔
              </button>
            </div>
            <div className={styles.searchType}>
              <button
                className={clsx(styles.airplaneTypeBtn, {
                  [styles.airplaneTypeBtnSelected]: flightOption === "roundTrip"
                })}
                onClick={() => {
                  setFlightOption("roundTrip");
                }}
              >
                왕복
              </button>
              <button
                className={clsx(styles.airplaneTypeBtn, {
                  [styles.airplaneTypeBtnSelected]: flightOption === "oneWay"
                })}
                onClick={() => {
                  setFlightOption("oneWay");
                }}
              >
                편도
              </button>
              <button
                className={clsx(styles.airplaneTypeBtn, {
                  [styles.airplaneTypeBtnSelected]: flightOption === "multiCity"
                })}
                onClick={() => {
                  setFlightOption("multiCity");
                }}
              >
                다구간
              </button>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 18px",
              gap: 32
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                width: "50%",
                justifyContent: "space-between"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  flex: 1,
                  cursor: "pointer"
                }}
              >
                <span style={{ fontSize: 14 }}>출발지</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                  }}
                >
                  <MdOutlineFlightTakeoff size={20} />
                  <span style={{ fontSize: 20, fontWeight: "bold" }}>인천</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  flex: 1,
                  cursor: "pointer"
                }}
              >
                <span style={{ fontSize: 14 }}>도착지</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                  }}
                >
                  <MdOutlineFlightLand size={20} />
                  <span style={{ fontSize: 20, fontWeight: "bold" }}>유럽</span>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  flex: 1
                }}
              >
                <span style={{ fontSize: 14 }}>날짜</span>
                <span style={{ fontSize: 20, fontWeight: "bold" }}>
                  2024.12.11 ~ 2024.12.22
                </span>
              </div>
              <div
                style={{
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: 12,
                  background: "#4285F4",
                  color: "#fff",
                  cursor: "pointer"
                }}
              >
                <IoSearch />
                <button>검색</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
