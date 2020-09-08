import React from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const Container = ({ className, ...rest }) => (
  <div className={cx('Container', className)} {...rest} />
);

export default Container;