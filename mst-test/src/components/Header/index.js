import React from "react";
import classNames from "classnames/bind";
import style from "./style.css";
import HeaderMenu from "../HeaderMenu";

const cx = classNames.bind(style);

const Header = () => (
  <header className={cx("Header")}>
    <div className={cx("LogoBox")}>
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cx("Logo")}
      >
        <rect width="70" height="70" fill="#262525" />
      </svg>
      <p className={cx("LogoText")}>Первомайская</p>
    </div>
    <HeaderMenu />
    <p className={cx('Number')}>8 888 888 88 88</p>
    <div className={cx("Burger")}>
      <div className={cx('BurgerBackground')}>
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="70" height="70" fill="#262525" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.998 47.5521L47.5556 21.995L49.005 23.4443L23.4466 49.0015L21.998 47.5521ZM33.9987 47.5521L47.5556 33.9957L49.005 35.4436L35.4474 49.0015L33.9987 47.5521ZM35.5569 21.995L21.998 35.5532L23.4466 37.0009L37.0042 23.4443L35.5569 21.995Z"
            fill="#F0F0F0"
            className={cx('BurgerIcon')}
          />
        </svg>
      </div>
    </div>
  </header>
);

export default Header;
