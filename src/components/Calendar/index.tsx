"use client";

import clsx from "clsx";
import { MouseEvent, useCallback, useEffect, useMemo, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./Calendar.module.css";

const changeDate = (newYear: number, newMonth: number, newDay: number) => {
  const modifiedDate = new Date(newYear, newMonth - 1, newDay);

  return modifiedDate;
};

const getYearMonthDay = (date: Date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };
};

const getDateFormatYYYYMMDD = (date: Date) => {
  return `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
};

interface CalendarProps {
  date: Date;
  onChangeDate: (value: Date) => void;
  selectedDate?: Date[];
}

const LIST = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = (props: CalendarProps) => {
  const { date: _date, onChangeDate, selectedDate = [] } = props;

  const [date, setDate] = useState(_date);

  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;

  const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();

  const selectedDateList = useMemo(() => {
    return selectedDate.map(el => getDateFormatYYYYMMDD(el));
  }, [selectedDate]);

  const onStopPropagation = useCallback(
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
      e.stopPropagation(),
    []
  );

  useEffect(() => {
    setDate(_date);
  }, [_date]);

  return (
    <div className={styles.container} onClick={onStopPropagation}>
      <div className={styles.calendarNav}>
        <MdKeyboardArrowLeft
          size={30}
          onClick={() => {
            const { year, month, day } = getYearMonthDay(date);
            const newDate = changeDate(year, month - 1, day);

            setDate(newDate);
          }}
        />
        <span className={styles.calendarDate}>
          {date.getFullYear()}.{date.getMonth() + 1}
        </span>
        <MdKeyboardArrowRight
          size={30}
          onClick={() => {
            const { year, month, day } = getYearMonthDay(date);
            const newDate = changeDate(year, month + 1, day);

            setDate(newDate);
          }}
        />
      </div>
      <div className={styles.calendarGrid}>
        {LIST.map((day, index) => (
          <div key={`day-${index}`} className={styles.calendarDayText}>
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfWeek }).map((_, index) => (
          <div key={`prev-${index}`} className={styles.calendarCell} />
        ))}
        {Array.from({ length: lastDate }).map((_, index) => {
          const { year, month } = getYearMonthDay(date);
          const day = index + 1;
          const newDate = changeDate(year, month, day);

          const yyyymmdd = getDateFormatYYYYMMDD(newDate);

          return (
            <div
              onClick={() => {
                onChangeDate(newDate);
              }}
              key={`current-${index}`}
              className={clsx(styles.calendarCell, {
                [styles.selected]: selectedDateList.includes(yyyymmdd),
                [styles.selectedStartEnd]:
                  !!selectedDateList.length &&
                  (selectedDateList[0] === yyyymmdd ||
                    selectedDateList.at(-1) === yyyymmdd)
              })}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
