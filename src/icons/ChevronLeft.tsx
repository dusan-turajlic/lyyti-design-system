import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ChevronLeft = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.02 21.29L.75 11.02 11.02.75"
    />
  );

export default ChevronLeft;
