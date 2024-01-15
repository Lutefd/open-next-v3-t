import * as React from 'react';
import { SVGProps } from 'react';
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className={props.className}
    {...props}
  >
    <path
      fill={props.fill ? props.fill : '#64C832'}
      fillRule="evenodd"
      d="M9.522 2a7.521 7.521 0 0 1 5.66 12.475l6.671 6.671a.5.5 0 0 1-.707.707l-6.67-6.671A7.523 7.523 0 1 1 9.522 2Zm0 1a6.522 6.522 0 1 0 0 13.044A6.522 6.522 0 0 0 9.522 3Z"
      clipRule="evenodd"
      className={props.className}
    />
  </svg>
);
export default SearchIcon;
