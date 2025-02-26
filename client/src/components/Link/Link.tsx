import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.css';

type LinkProps = {
  to: string;
  className?: string;
  onClick?: () => void;
} & React.PropsWithChildren;

export default function Link({ to, className, children, onClick }: LinkProps) {
  return (
    <RouterLink onClick={onClick} to={to} className={`${styles.button} ${className || ''}`}>
      {children}
    </RouterLink>
  );
}
