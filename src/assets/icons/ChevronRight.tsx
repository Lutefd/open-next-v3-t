import * as React from 'react';
import { SVGProps } from 'react';
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#64C832"
      d="M15.932 21.147a.5.5 0 0 0 .706.708l9.501-9.5a.5.5 0 0 0 0-.707l-9.5-9.5a.5.5 0 1 0-.707.707l9.147 9.147-9.147 9.145Z"
    />
  </svg>
);
export default ChevronRight;
