import { SVGProps } from 'react';

export function Transmission(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1.75em'
      height='1.75em'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M5 4v16m7-16v16m7-16v8H5'
      ></path>
    </svg>
  );
}
