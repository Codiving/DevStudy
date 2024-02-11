"use client";

import { Instance, createPopper } from "@popperjs/core";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { FaHotel } from "react-icons/fa6";
import { IoAirplane, IoSearch } from "react-icons/io5";
import { MdOutlineFlightLand, MdOutlineFlightTakeoff } from "react-icons/md";
import { usePopper } from "react-popper";
import Calendar, { getDateFormatYYYYMMDD, isBeforeDate } from "../Calendar";
import styles from "./AirlineSearch.module.css";

type Ticket = "flight" | "flightHotel";
type FlightOption = "roundTrip" | "oneWay" | "multiCity";

type PopperType = null | "begin" | "end";

export default function AirlineSearch() {
  const [ticket, setTicket] = useState<Ticket>("flight");
  const [flightOption, setFlightOption] = useState<FlightOption>("roundTrip");

  const [begin, setBegin] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [popperType, setPopperType] = useState<PopperType>(null);
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const popperInstanceRef = useRef<Instance | null>(null);
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

  useEffect(() => {
    if (popperType) {
      if (referenceElement && popperElement) {
        popperInstanceRef.current = createPopper(
          referenceElement,
          popperElement
        );
        const handleClickOutside = (event: MouseEvent) => {
          if (popperElement && !popperElement.contains(event.target as Node)) {
            setPopperType(null);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          if (popperInstanceRef.current) {
            popperInstanceRef.current.destroy();
          }
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }

      document.body.style.overflow = "hidden";

      return () => {};
    } else {
      document.body.style.overflow = "auto";
    }
  }, [popperElement, popperType, referenceElement]);

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
              <div className={styles.dateSearchWrap} ref={setReferenceElement}>
                <span className={styles.departureDestinationText}>날짜</span>
                <div style={{ display: "flex", gap: 8 }}>
                  <span
                    className={styles.departureDestinationResultText}
                    onClick={() => {
                      setPopperType("begin");
                    }}
                  >
                    {getDateFormatYYYYMMDD(begin)}
                  </span>
                  <span className={styles.departureDestinationResultText}>
                    ~
                  </span>
                  <span
                    className={styles.departureDestinationResultText}
                    onClick={() => {
                      setPopperType("end");
                    }}
                  >
                    {getDateFormatYYYYMMDD(end)}
                  </span>
                </div>
                {!!popperType && (
                  <div className={styles.popperCSSContainer}>
                    <div
                      ref={setPopperElement}
                      {...attributes.popper}
                      style={popperStyles.popper}
                      className={styles.popperCSS}
                    >
                      <Calendar
                        date={popperType === "begin" ? begin : end}
                        onChangeDate={date => {
                          if (popperType === "begin") {
                            setBegin(date);

                            if (isBeforeDate(end, date)) {
                              setEnd(date);
                            }
                          } else {
                            setEnd(date);
                          }
                          setPopperType(null);
                        }}
                        startDate={popperType === "begin" ? new Date() : begin}
                      />
                    </div>
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
