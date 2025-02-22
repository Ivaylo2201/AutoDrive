import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type ButtonProps = {
  to: string;
  className?: string;
} & React.PropsWithChildren;

export default function Button({ to, className, children }: ButtonProps) {
  return (
    <Link to={to} className={`${styles.button} ${className || ''}`}>
      {children}
    </Link>
  );
}
