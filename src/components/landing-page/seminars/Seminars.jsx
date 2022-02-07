import React from "react";
import seminars from "assets/img/seminars-1.jpg";

const Seminars = () => {
  return (
    <section className="py-20 bg-blue-50 relative px-6 md:px-10 xl:px-0">
      <div className="absolute w-full left-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 1280 335"
          fill="none"
        >
          <path
            d="M1563.33 1649.27C1490.63 1644.44 1429.34 1627.9 1368.6 1609.8C1309.91 1592.32 1251.36 1574.02 1191.49 1561.19C1123.99 1546.73 1055.25 1543.21 986.206 1542.93C891.054 1542.54 798.067 1560.06 704.712 1573.98C622.302 1585.91 538.61 1586.01 456.169 1574.28C377.748 1563.57 300.633 1544.77 228.219 1510.05C137.419 1466.34 63.1193 1403.77 2.9546 1323.29C-55.0077 1245.73 -93.7125 1159.26 -117.748 1066.07C-135.318 997.442 -145.64 927.157 -148.543 856.373C-151.479 789.538 -151.353 722.778 -143.69 656.584C-132.294 558.308 -111.122 462.471 -59.0254 376.455C0.934241 277.448 86.9552 211.386 198.219 179.525C253.072 164.006 308.625 167.286 364.49 178.35C424.645 190.275 482.873 209.546 542.678 222.406C614.473 237.8 689.018 234.508 759.173 212.848C833.821 190.435 903.164 156.488 970.071 117.364C1035.08 79.4232 1104.86 54.7701 1179.77 49.0831C1287.7 40.8647 1382.7 73.3165 1465.17 144.74C1541.97 211.442 1629.91 258.311 1730.18 278.878C1763.72 285.773 1798.07 289.304 1832.23 293.206C1892.49 300.122 1953.64 301.953 2011.51 323.661C2126 366.417 2205.41 441.982 2230.67 564.74C2242.55 622.523 2236.02 680.327 2216.05 736.534C2192.01 804.418 2150.71 860.229 2100.61 910.949C2040.77 971.628 1987.05 1036.9 1958.13 1119C1946 1153.33 1936.65 1188.74 1933.77 1225.19C1928.52 1291.71 1922.58 1357.92 1901.52 1421.85C1881.84 1481.24 1851.5 1534.27 1804.96 1576.18C1758.41 1618.1 1701.54 1641.41 1638.36 1647.11C1610.39 1650.01 1582.4 1651.91 1563.33 1649.27Z"
            fill="#D2E2F3"
          />
        </svg>
      </div>
      <div
        className="
      max-w-screen-lg
      mx-auto
      flex flex-wrap
      items-center
      relative
      space-y-12
      lg:space-y-0
    "
      >
        <div className="w-full lg:w-1/2 lg:pr-4 xl:pr-6">
          <img
            src={seminars}
            alt="seminars"
            className="w-full rounded-xl shadow-xl"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-4 xl:pl-6">
          <h3 className="text-4xl font-bold text-primary">
            Successful Breastfeeding Webinar with Practical Parenting Tips -
            November 2021
          </h3>
          <p className="mt-2 text-gray-600">
            This November, PIGEON is collaborating once again with the expert,
            Dr Wong Boh Boi, for our Successful Breastfeeding Webinar 2021! So,
            come and join us to know more about essential...
          </p>
          <button
            className="
          mt-4
          px-6
          py-3
          rounded-full
          bg-primary
          text-white text-sm
          font-bold
          hover:bg-white hover:text-primary
          transition-color
          duration-500
        "
          >
            Learn More
          </button>
        </div>
        <div className="w-full lg:w-1/2 lg:pr-4 xl:pr-6" />
        <div className="w-full lg:w-1/2 lg:pl-4 xl:pl-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4 items-center">
              <div
                className="
              flex
              items-center
              justify-center
              w-6
              h-6
              rounded-full
              border border-primary
              cursor-pointer
            "
              >
                <span className="inline-block w-4 h-4 bg-primary rounded-full" />
              </div>
              <div
                className="
              flex
              items-center
              justify-center
              w-6
              h-6
              rounded-full
              border border-primary
              cursor-pointer
            "
              >
                <span className="inline-block w-4 h-4 bg-transparent rounded-full" />
              </div>
              <div
                className="
              flex
              items-center
              justify-center
              w-6
              h-6
              rounded-full
              border border-primary
              cursor-pointer
            "
              >
                <span className="inline-block w-4 h-4 bg-transparent rounded-full" />
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
              h-12
              w-12
              text-primary
              hover:opacity-50
              transition-color
              duration-500
              cursor-pointer
            "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
              h-12
              w-12
              text-primary
              hover:opacity-50
              transition-color
              duration-500
              cursor-pointer
            "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seminars;
