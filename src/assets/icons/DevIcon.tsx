import * as React from 'react';
import { SVGProps } from 'react';
const DevIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={26}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ? props.fill : '#64C832'}
      fillRule="evenodd"
      d="M1.2 7.306h21.6V3.951a.752.752 0 0 0-.751-.751H1.95a.752.752 0 0 0-.751.751v3.355ZM22.049 20.24a.752.752 0 0 0 .751-.751V8.507H1.2v10.982c0 .414.337.751.751.751h9.355L9.24 14.193a.601.601 0 0 1 .76-.762l10.23 3.49a.6.6 0 0 1 .231.991l-1.657 1.656.67.672h2.575ZM15.8 21.723l2.828 2.829 1.731-1.732-1.555-1.555-.002-.001-1.271-1.271a.604.604 0 0 1 0-.849l1.399-1.399-8.159-2.784 2.783 8.146 1.4-1.386a.601.601 0 0 1 .846.002ZM1.951 2H22.05C23.125 2 24 2.875 24 3.951V19.49a1.954 1.954 0 0 1-1.951 1.951h-1.374l.956.956a.598.598 0 0 1 0 .849l-2.579 2.579a.599.599 0 0 1-.848 0l-2.83-2.83-1.656 1.64a.599.599 0 0 1-.99-.233l-1.011-2.961H1.95A1.954 1.954 0 0 1 0 19.489V3.95C0 2.875.875 2 1.951 2ZM2.5 5.253a.754.754 0 1 1 1.508 0 .754.754 0 0 1-1.508 0Zm3.597-.754a.754.754 0 1 0 0 1.509.754.754 0 0 0 0-1.509Zm2.088.754a.753.753 0 1 1 1.507 0 .753.753 0 0 1-1.507 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DevIcon;
