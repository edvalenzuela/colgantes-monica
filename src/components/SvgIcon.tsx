import React from 'react';

const CustomSVGIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <rect width="256" height="256" fill="none" />
    <path
      d="M144.28,111.72c-25.08-41.81,8.36-83.61,79.43-79.43C227.89,103.36,186.09,136.8,144.28,111.72Z"
      fill="green"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M98,114c18.24-30.41-6.08-60.81-57.77-57.77C37.17,107.9,67.57,132.22,98,114Z"
      fill="green"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="152"
      x2="200"
      y2="152"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184,152l-14.61,65.74a8,8,0,0,1-7.81,6.26H94.42a8,8,0,0,1-7.81-6.26L72,152"
      fill="brown"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144.28"
      y1="111.72"
      x2="104"
      y2="152"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="97.98"
      y1="113.98"
      x2="120"
      y2="136"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

export default CustomSVGIcon;
