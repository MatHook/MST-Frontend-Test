import React from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const Footer = () => (
  <div className={cx('FooterBackground')}>
    <div className={cx('Footer')}>Разработано в MST   |   2018</div>
  </div>
);

export default Footer;