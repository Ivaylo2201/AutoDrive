import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type ButtonProps = {
  to: string;
  className?: string;
  onClick?: () => void;
} & React.PropsWithChildren;

export default function Button({ to, className, children, onClick }: ButtonProps) {
  return (
    <Link onClick={onClick} to={to} className={`${styles.button} ${className || ''}`}>
      {children}
    </Link>
  );
}
