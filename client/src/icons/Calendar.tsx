import { SVGProps } from 'react';

export function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1.5em'
      height='1.5em'
      {...props}
    >
      <g fill='none' stroke='currentColor'>
        <rect width='18' height='15' x='3' y='6' rx='2'></rect>
        <path strokeLinecap='round' d='M3 11h18M9 16h6M8 3v4m8-4v4'></path>
      </g>
    </svg>
  );
}
