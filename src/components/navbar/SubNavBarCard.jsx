import React from "react";
import { Link } from "react-router-dom";

const SubNavBarCard = ({ svg, cardTitle, cardContent, route, custStyle }) => {
  return (
    <Link to={route}>
      <div
        className={`
    lg:bg-primary
    lg:bg-opacity-10
    lg:px-4
    lg:py-6
    lg:w-48
    lg:hover:bg-primary
    lg:hover:text-white
    transition-color
    duration-500
  `}
      >
        {svg}
        <p
          className="
font-normal
lg:font-bold lg:tracking-relaxed
mt-3
mb-2
    "
        >
          {cardTitle}
        </p>
        <p
          className={`
text-sm
font-normal
tracking-tighter
hidden
lg:block
    `}
          style={{ paddingBottom: custStyle && "1.5em" }}
        >
          {cardContent}
        </p>
      </div>
    </Link>
  );
};

export default SubNavBarCard;
