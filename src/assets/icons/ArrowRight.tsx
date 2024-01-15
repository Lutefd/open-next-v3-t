import * as React from 'react';
import { SVGProps } from 'react';
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={38}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ? props.fill : '#fff'}
      d="M3 16.5a2.5 2.5 0 0 0 0 5v-5Zm57.768 4.268a2.5 2.5 0 0 0 0-3.536l-15.91-15.91a2.5 2.5 0 0 0-3.536 3.536L55.464 19 41.323 33.142a2.5 2.5 0 0 0 3.536 3.536l15.91-15.91ZM3 21.5h56v-5H3v5Z"
    />
  </svg>
);
export default ArrowRight;
