import React from "react";
import { useSelector } from "react-redux";
import className from "classnames/bind";
import style from "./style.css";
import _ from "loadsh";

const cx = className.bind(style);

const ContentList = () => {
  const currentSegmentId = useSelector((state) => state.content.currentSegment);
  const segments = useSelector((state) => state.content.segments);
  const currentSegment = _.find(segments, { id: currentSegmentId });

  const content = (
    <section>
      <h3 className={cx("ContentTitle")}>{currentSegment.title}</h3>
      <p className={cx("ContentText")}>{currentSegment.content}</p>
      <div className={cx("LinkDetail")}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H28V28H0V0Z" fill="#262525" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.5 13H10.7395V15.2406H8.5V13ZM12.9803 13H15.2197V15.2406H12.9803V13ZM19.7001 13H17.4592V15.2406H19.7001V13Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );

  return (
    <div>
      <div className={cx("ContentBackground")}>
        <div className={cx("Content")}>{content}</div>
        <div className={cx("Navigation")}>
          <p>{currentSegmentId + 1} / 6</p>
        </div>
      </div>
      <div className={cx("Illustration")}>
        <img src={currentSegment.image} alt="Content" />
      </div>
    </div>
  );
};

export default ContentList;
