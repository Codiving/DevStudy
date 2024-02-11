"use client";

import clsx from "clsx";
import { useState } from "react";
import { FaHotel } from "react-icons/fa6";
import { IoAirplane, IoSearch } from "react-icons/io5";
import { MdOutlineFlightLand, MdOutlineFlightTakeoff } from "react-icons/md";
import { usePopper } from "react-popper";
import styles from "./AirlineSearch.module.css";

type Ticket = "flight" | "flightHotel";
type FlightOption = "roundTrip" | "oneWay" | "multiCity";

export default function AirlineSearch() {
  const [showPopper, setShowPopper] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 15]
          }
        }
      ]
    }
  );

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
          <div className={styles.searchResultWrap}>
            <div className={styles.departureDestinationContainer}>
              <div className={styles.departureDestinationWrap}>
                <span className={styles.departureDestinationText}>출발지</span>
                <div className={styles.departureDestinationResultWrap}>
                  <MdOutlineFlightTakeoff size={20} />
                  <span className={styles.departureDestinationResultText}>
                    인천
                  </span>
                </div>
              </div>
              <div className={styles.departureDestinationWrap}>
                <span className={styles.departureDestinationText}>도착지</span>
                <div className={styles.departureDestinationResultWrap}>
                  <MdOutlineFlightLand size={20} />
                  <span className={styles.departureDestinationResultText}>
                    유럽
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.dateSearchContainer}>
              <div
                className={styles.dateSearchWrap}
                ref={setReferenceElement}
                onClick={() => {
                  setShowPopper(prev => !prev);
                }}
              >
                <span className={styles.departureDestinationText}>날짜</span>
                <span className={styles.departureDestinationResultText}>
                  2024.12.11 ~ 2024.12.22
                </span>

                {showPopper && (
                  <div
                    ref={setPopperElement}
                    {...attributes.popper}
                    style={popperStyles.popper}
                    className={styles.popperCSS}
                  >
                    캘린더
                  </div>
                )}
              </div>
              <div className={styles.searchButtonWrap}>
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
