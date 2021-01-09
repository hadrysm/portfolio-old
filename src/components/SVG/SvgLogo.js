import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 45 45"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 16a2 2 0 100 4 2 2 0 000-4zm0 2.667a.667.667 0 100-1.334.667.667 0 000 1.334zM18 21a2 2 0 100 4 2 2 0 000-4zm0 2.667a.667.667 0 100-1.334.667.667 0 000 1.334zM18 26a2 2 0 100 4 2 2 0 000-4zm0 2.667a.667.667 0 100-1.334.667.667 0 000 1.334zM23 21a2 2 0 100 4 2 2 0 000-4zm0 2.667a.667.667 0 100-1.334.667.667 0 000 1.334zM28 21a2 2 0 100 4 2 2 0 000-4zm0 2.667a.667.667 0 100-1.334.667.667 0 000 1.334zM28 16a2 2 0 100 4 2 2 0 000-4zm0 2.667a.667.667 0 100-1.334.667.667 0 000 1.334zM28 26a2 2 0 100 4 2 2 0 000-4zm0 2.667a.667.667 0 100-1.334.667.667 0 000 1.334z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgComponent;
