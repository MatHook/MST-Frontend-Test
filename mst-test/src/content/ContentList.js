import React from "react";
import { useSelector } from "react-redux";
import className from "classnames/bind";
import style from "./style.css";

const cx = className.bind(style);

export const ContentList = () => {
  const content = useSelector((state) => state.content);

  const renderedContent = content.map((cnt, i) => {
    let content

    if (cnt.visible === true) {
      content = (
        <div key={i}>
          <h3 className={cx("ContentTitle")}>{cnt.title}</h3>
          <p className={cx("ContentText")}>{cnt.content}</p>
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
          <img src={cnt.image} alt="Content" />
        </div>
      );
    }
    

    return (
      <section>
        {content}
      </section>
    )
  });

  return (
    <div className={cx("ContentBackground")}>
      <div className={cx("Content")}>{renderedContent}</div>
    </div>
  );
};
