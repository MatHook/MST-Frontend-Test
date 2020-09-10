import React from "react";
import classNames from "classnames/bind";
import style from "./style.css";
import useHover from "../../utils/hooks";

const cx = classNames.bind(style);

const SectionMenu = () => {
  const [item1, isHovered1] = useHover();
  const [item2, isHovered2] = useHover();
  const [item3, isHovered3] = useHover();
  const [item4, isHovered4] = useHover();
  const [item5, isHovered5] = useHover();
  const [item6, isHovered6] = useHover();

  return(
    <div className={cx("SectionMenu")}>
      <button type="submit" className={cx("SectionMenuItem1")} ref={item1}>
        Архитектура
        {isHovered1 ? <div className={cx("SectionMenuActiveItem1")} /> : null}
      </button>
      <button type="submit" className={cx("SectionMenuItem2")} ref={item2}>
        Благоустройство
        {isHovered2 ? <div className={cx("SectionMenuActiveItem2")} /> : null}
      </button>
      <button type="submit" className={cx("SectionMenuItem3")} ref={item3}>
        Безопастность
        {isHovered3 ? <div className={cx("SectionMenuActiveItem3")} /> : null}
      </button>
      <button type="submit" className={cx("SectionMenuItem4")} ref={item4}>
        Инженерия
        {isHovered4 ? <div className={cx("SectionMenuActiveItem4")} /> : null}
      </button>
      <button type="submit" className={cx("SectionMenuItem5")} ref={item5}>
        Инфраструктура
        {isHovered5 ? <div className={cx("SectionMenuActiveItem5")} /> : null}
      </button>
      <button type="submit" className={cx("SectionMenuItem6")} ref={item6}>
        Транспортная доступность
        {isHovered6 ? <div className={cx("SectionMenuActiveItem6")} /> : null}
      </button>
    </div>
  );
};

export default SectionMenu;
