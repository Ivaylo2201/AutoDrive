import { SVGProps } from 'react';

export function CarDoor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1.5em'
      height='1.5em'
      {...props}
    >
      <path
        fill='currentColor'
        d='M19 14h-3v2h3zm3 7H3V11l8-8h10a1 1 0 0 1 1 1zM11.83 5l-6 6H20V5z'
      ></path>
    </svg>
  );
}
