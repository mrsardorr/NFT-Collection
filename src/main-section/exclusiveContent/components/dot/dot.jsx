import React from "react";
import "./dot.scss"

function Icon(props) {
  return (
    <svg
      width={34}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="dot"
      {...props}
    >
      <path
        d="M4.167 7.464C6.34 4.124 9.532 1.092 13.217.33c3.684-.783 7.86.703 11.691 2.893 3.831 2.19 7.274 5.102 8.033 8.572.739 3.47-1.25 7.516-2.96 11.415-1.731 3.899-3.185 7.671-6.031 9.98-2.846 2.286-7.104 3.108-11.267 2.54-4.184-.545-8.273-2.48-10.438-5.64C.08 26.909-.16 22.503.317 18.487c.478-4.037 1.676-7.684 3.85-11.023z"
        fill="#FF8961"
      />
    </svg>
  );
}

export default Icon;