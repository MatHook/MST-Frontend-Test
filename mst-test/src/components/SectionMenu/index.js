import React from "react";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import style from "./style.css";
import { setCurrentSegment } from "../../content/contentSlice";
import store from "../../app/store";

const cx = classNames.bind(style);

const SectionMenu = () => {
  const currentSegmentId = useSelector((state) => state.content.currentSegment);

  const setVisible = (id) => {
    store.dispatch(setCurrentSegment({ id }));
  };

  return (
    <div className={cx("SectionMenu")}>
      <button
        type="submit"
        className={cx("SectionMenuItem1", currentSegmentId === 0 ? "active" : "")}
        onClick={() => setVisible(0)}
      >
        Архитектура
        <div className={cx("SectionMenuActiveItem1")} />
      </button>
      <button
        type="submit"
        className={cx("SectionMenuItem2", currentSegmentId === 1 ? "active" : "")}
        onClick={() => setVisible(1)}
      >
        Благоустройство
        <div className={cx("SectionMenuActiveItem2")} />
      </button>
      <button
        type="submit"
        className={cx("SectionMenuItem3", currentSegmentId === 2 ? "active" : "")}
        onClick={() => setVisible(2)}
      >
        Безопастность
        <div className={cx("SectionMenuActiveItem3")} />
      </button>
      <button
        type="submit"
        className={cx("SectionMenuItem4", currentSegmentId === 3 ? "active" : "")}
        onClick={() => setVisible(3)}
      >
        Инженерия
        <div className={cx("SectionMenuActiveItem4")} />
      </button>
      <button
        type="submit"
        className={cx("SectionMenuItem5", currentSegmentId === 4 ? "active" : "")}
        onClick={() => setVisible(4)}
      >
        Инфраструктура
        <div className={cx("SectionMenuActiveItem5")} />
      </button>
      <button
        type="submit"
        className={cx("SectionMenuItem6", currentSegmentId === 5 ? "active" : "")}
        onClick={() => setVisible(5)}
      >
        Транспортная доступность
        <div className={cx("SectionMenuActiveItem6")} />
      </button>
    </div>
  );
};

export default SectionMenu;
