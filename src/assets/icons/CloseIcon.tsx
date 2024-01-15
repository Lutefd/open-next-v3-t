import * as React from 'react';
import { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <path
      fillRule="evenodd"
      stroke="currentColor"
      d="m10.707 10 9.147 9.146a.5.5 0 0 1-.708.707L10 10.707.854 19.853a.5.5 0 0 1-.708-.707L9.293 10 .146.853A.5.5 0 1 1 .854.146L10 9.293 19.146.146a.5.5 0 0 1 .708.707L10.707 10Z"
      clipRule="evenodd"
      fill={props.fill}
    />
  </svg>
);
export default CloseIcon;
