"use client";

import clsx from "clsx";
import { MouseEvent, useCallback, useEffect, useState } from "react";
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

export const isBeforeDate = (_date1: Date, _date2: Date) => {
  const date1 = new Date(_date1);
  const date2 = new Date(_date2);

  const newDate1 = new Date(
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate()
  );
  const newDate2 = new Date(
    date2.getFullYear(),
    date2.getMonth(),
    date2.getDate()
  );

  if (newDate1 < newDate2) {
    return true;
  } else {
    return false;
  }
};

export const getDateFormatYYYYMMDD = (date: Date) => {
  return `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;
};

const isBeforeMonth = (_date1: Date, _date2: Date) => {
  const date1 = new Date(_date1);
  const date2 = new Date(_date2);

  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();

  if (year1 < year2 || (year1 === year2 && month1 <= month2)) {
    return true;
  } else {
    return false;
  }
};

interface CalendarProps {
  date: Date;
  onChangeDate: (value: Date) => void;
  startDate: Date;
}

const LIST = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = (props: CalendarProps) => {
  const { date: _date, onChangeDate, startDate } = props;

  const [date, setDate] = useState(_date);

  const disabledLeft = isBeforeMonth(date, startDate);

  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;

  const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();

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
          className={disabledLeft ? styles.disabledLeftButton : undefined}
          onClick={() => {
            if (disabledLeft) return;

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

          const isCurrentDate =
            getDateFormatYYYYMMDD(newDate) === getDateFormatYYYYMMDD(date);
          const disabled = isBeforeDate(newDate, startDate);

          return (
            <div
              onClick={() => {
                if (disabled) return;

                onChangeDate(newDate);
              }}
              key={`current-${index}`}
              className={clsx(styles.calendarCell, {
                [styles.disabledDayText]: disabled,
                [styles.selected]: isCurrentDate,
                [styles.abledHover]:
                  !isBeforeDate(newDate, startDate) && !isCurrentDate
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
