import * as React from "react";

interface SearchProps {
  width?: number;
  height?: number;
}
export const Search = ({ width, height, ...props }: SearchProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "1em"}
    height={height || "1em"}
    viewBox={`0 0 ${width || 20} ${height || 20}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      d="M20.7094 18.79L16.9994 15.11C18.4395 13.3144 19.1369 11.0353 18.9482 8.7413C18.7595 6.4473 17.6991 4.31278 15.9849 2.77664C14.2708 1.2405 12.0332 0.419506 9.73234 0.482466C7.43145 0.545427 5.24214 1.48756 3.61456 3.11514C1.98698 4.74272 1.04485 6.93203 0.981887 9.23292C0.918926 11.5338 1.73992 13.7714 3.27606 15.4855C4.8122 17.1997 6.94672 18.2601 9.24072 18.4488C11.5347 18.6375 13.8138 17.9401 15.6094 16.5L19.2894 20.18C19.3824 20.2737 19.493 20.3481 19.6148 20.3989C19.7367 20.4497 19.8674 20.4758 19.9994 20.4758C20.1314 20.4758 20.2621 20.4497 20.384 20.3989C20.5059 20.3481 20.6165 20.2737 20.7094 20.18C20.8897 19.9935 20.9904 19.7443 20.9904 19.485C20.9904 19.2257 20.8897 18.9765 20.7094 18.79ZM9.99942 16.5C8.61495 16.5 7.26157 16.0895 6.11042 15.3203C4.95928 14.5511 4.06207 13.4579 3.53226 12.1788C3.00245 10.8997 2.86382 9.49223 3.13392 8.13436C3.40402 6.7765 4.0707 5.52922 5.04967 4.55025C6.02864 3.57128 7.27592 2.9046 8.63378 2.6345C9.99165 2.3644 11.3991 2.50303 12.6782 3.03284C13.9573 3.56265 15.0505 4.45986 15.8197 5.611C16.5889 6.76215 16.9994 8.11553 16.9994 9.5C16.9994 11.3565 16.2619 13.137 14.9492 14.4497C13.6364 15.7625 11.8559 16.5 9.99942 16.5Z"
    />
  </svg>
);
