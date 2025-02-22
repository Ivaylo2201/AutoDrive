import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  to: string;
  className?: string;
} & React.PropsWithChildren;

export default function Button({ to, className, children }: ButtonProps) {
  return (
    <Link
      to={to}
      className={`bg-black hover:bg-neutral-600 transition-colors duration-300 hover:cursor-pointer rounded-full text-white px-5 py-2 inline-flex items-center justify-center ${
        className || ''
      }`}
    >
      {children}
    </Link>
  );
}
