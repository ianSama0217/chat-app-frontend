import React from "react";
import style from "./index.module.scss";

interface DateTagProps {
  date: string;
}

const DateTag: React.FC<DateTagProps> = ({ date }) => {
  const formatDate = (dateStr: string) => {
    const inputDate = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const year = inputDate.getFullYear();
    const month = inputDate.getMonth() + 1;
    const day = inputDate.getDate();

    const currentYear = today.getFullYear();

    if (
      year === today.getFullYear() &&
      month === today.getMonth() + 1 &&
      day === today.getDate()
    ) {
      return "今日";
    }

    if (
      year === yesterday.getFullYear() &&
      month === yesterday.getMonth() + 1 &&
      day === yesterday.getDate()
    ) {
      return "昨日";
    }

    if (year != currentYear) {
      return `${year}年${month}月${day}日`;
    }

    return `${month}月${day}日`;
  };

  return (
    <div className={style["date-tag-component"]}>
      <span>{formatDate(date)}</span>
    </div>
  );
};

export default DateTag;
