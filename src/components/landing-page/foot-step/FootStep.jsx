import React from "react";
import leftFoot from "assets/img/left-foot.svg";
import rightFoot from "assets/img/right-foot.svg";

const FootStep = () => {
  return (
    <section className="py-20 relative px-6 md:px-10 xl:px-0">
      <div className="absolute left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={103}
          height={457}
          viewBox="0 0 103 457"
          fill="none"
        >
          <path
            d="M-417.821 339.071C-408.851 321.167 -398.135 307.401 -387.083 293.942C-376.403 280.932 -365.532 268.049 -355.905 254.247C-345.054 238.687 -336.841 221.648 -329.414 204.186C-319.18 180.122 -313.711 154.701 -307.29 129.569C-301.531 107.422 -292.642 86.2091 -280.89 66.5726C-269.824 47.8462 -256.848 30.3118 -240.343 15.6632C-219.603 -2.68687 -195.843 -14.8481 -169.055 -21.5219C-143.242 -27.9493 -117.224 -28.5495 -91.0663 -24.7178C-71.8156 -21.8625 -52.9189 -16.9949 -34.6859 -10.1949C-17.4491 -3.82374 -0.557854 3.31531 15.3874 12.3036C39.0587 25.6527 61.0708 41.219 77.3022 63.5738C95.9852 89.3037 103.55 118.128 99.765 149.707C97.8513 165.255 91.103 178.98 82.3503 191.954C72.9228 205.924 61.8401 218.624 52.2131 232.405C40.6671 248.955 33.5595 268.19 31.5711 288.269C29.2944 309.565 30.5035 330.746 33.2832 351.861C35.9656 372.368 34.775 392.67 28.2352 412.253C18.8186 440.471 0.481213 461.083 -26.3895 474.371C-51.4614 486.728 -72.697 504.016 -88.5857 527.227C-93.9054 534.991 -98.4582 543.317 -103.085 551.556C-111.256 566.086 -118.234 581.382 -129.895 593.732C-152.917 618.183 -180.511 630.256 -214.287 623.588C-230.184 620.446 -244.126 612.638 -256.23 601.594C-270.859 588.277 -280.592 571.873 -288.098 553.781C-297.089 532.162 -307.894 511.604 -325.601 495.538C-333.003 488.811 -340.974 482.671 -349.898 478.063C-366.181 469.65 -382.315 461.097 -396.259 448.955C-409.202 437.648 -419.396 424.317 -425.052 408.064C-430.709 391.811 -430.552 374.921 -425.265 358.309C-423.02 350.915 -420.521 343.62 -417.821 339.071Z"
            fill="#F7D25C"
          />
        </svg>
      </div>
      <div
        className="
max-w-screen-lg
mx-auto
lg:flex
items-center
relative
lg:space-x-12
    "
      >
        <div className="w-full lg:w-2/5">
          <h3 className="text-4xl lg:-mt-10">
            Now, let's start your journey together
          </h3>
          <div className="foot-steps mt-20 lg:mt-10">
            <div className="flex items-center space-x-4 md:space-x-6">
              <img src={leftFoot} alt="left1" className="left-foot" />
              <img src={leftFoot} alt="left2" className="left-foot" />
              <img src={leftFoot} alt="left3" className="left-foot" />
              <img
                src={leftFoot}
                alt="left4"
                className="left-foot hidden md:block"
              />
            </div>
            <div className="flex items-center space-x-4 md:space-x-6 ml-4 -mt-6">
              <img src={rightFoot} alt="right1" className="right-foot" />
              <img src={rightFoot} alt="right2" className="right-foot" />
              <img src={rightFoot} alt="right3" className="right-foot" />
              <img
                src={rightFoot}
                alt="right4"
                className="right-foot hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <div className="p-12 rounded-xl bg-pink-100 relative">
            <p className="text-lg font-bold mb-2">
              Are you pregnant? <span className="text-red-500">*</span>
            </p>
            <input type="radio" name="pregnant" defaultChecked />
            <label className="pl-3">Yes</label>
            <br />
            <input type="radio" name="pregnant" />
            <label className="pl-3">No</label>
            <p className="text-lg font-bold mt-6 mb-2">
              Do you have kids? <span className="text-red-500">*</span>
            </p>
            <input type="radio" name="pregnant" defaultChecked />
            <label className="pl-3">Yes</label>
            <br />
            <input type="radio" name="pregnant" />
            <label className="pl-3">No</label>
            <div className="flex justify-end">
              <button
                className="
        mt-20
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
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FootStep;
