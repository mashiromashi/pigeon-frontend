import {
  award,
  basicPolicy,
  blog,
  company,
  contactUs,
  faq,
  goGreen,
  history,
  love,
  ourRd,
  pigeonWay,
  presence,
  productManual,
  registration,
  tips,
} from "assets/svg/svg";
import React from "react";
import NavList from "./NavList";
import NavSubMenu from "./NavSubMenu";
import SubNavBarCard from "./SubNavBarCard";

const NavLists = ({ searchOpen }) => {
  return (
    <ul
      id="MenuItemsInNavbar"
      className={`
    h-12
    items-center
    text-primary
    font-bold
    tracking-relaxed
    ${searchOpen ? "hidden" : "block lg:flex"}
    mt-10
    lg:mt-0`}
    >
      {/* Product */}
      <NavList title="Products" />
      {/* resources */}
      <NavList title="Resources">
        <NavSubMenu subTitle="Resources">
          <SubNavBarCard
            svg={blog}
            cardTitle="Blogs & Articles"
            cardContent="Your guide to parenthood"
          />
          <SubNavBarCard
            svg={tips}
            cardTitle="Tips & Help Guides"
            cardContent="In-depth guides on our products and to get started"
          />
        </NavSubMenu>
      </NavList>
      {/* about pigeon */}
      <NavList title="About Pigeon">
        <NavSubMenu subTitle="About Pigeon">
          <SubNavBarCard
            svg={company}
            cardTitle="About Company"
            cardContent="Learn the origin of our name Pigeon"
          />
          <SubNavBarCard
            svg={history}
            cardTitle="Our History"
            cardContent="Discover how PIEGON was found"
          />
          <SubNavBarCard
            svg={pigeonWay}
            cardTitle="The Piegon Way"
            cardContent="Our fundamental ideology of The Piegon Way"
          />
          <SubNavBarCard
            svg={ourRd}
            cardTitle="Our R&D"
            cardContent="Research from our world-class team of scientists"
          />
          <SubNavBarCard
            svg={award}
            cardTitle="Our Awards"
            cardContent="View our achievements and recognitions"
          />
          <SubNavBarCard
            svg={presence}
            cardTitle="Our Presence"
            cardContent="Locate our office from all over the world"
          />
        </NavSubMenu>
      </NavList>
      {/* Sustainability   */}
      <NavList title="Sustainability">
        <NavSubMenu subTitle="Sustainability">
          <SubNavBarCard
            svg={love}
            cardTitle="Love Our Babies, Love Our Planet"
          />
          <SubNavBarCard svg={goGreen} cardTitle="Go Green With Piegon" />
        </NavSubMenu>
      </NavList>
      {/* Customer Service   */}
      <NavList title="Customer Service">
        <NavSubMenu subTitle="Customer Service">
          <SubNavBarCard
            svg={contactUs}
            cardTitle="Contact Us"
            cardContent="Find our office address, phone number and email address"
          />
          <SubNavBarCard
            svg={registration}
            cardTitle="Warranty Registration"
            cardContent="Register your product with our online forms"
          />
          <SubNavBarCard
            svg={faq}
            cardTitle="FAQ"
            cardContent="Get answers quickly by glancing through our most ask
            questions"
          />
          <SubNavBarCard
            svg={productManual}
            cardTitle="Product Manual"
            cardContent="In-depth product manuals to troubleshoot your Piegon
            products"
          />
          <SubNavBarCard
            svg={basicPolicy}
            cardTitle="Basic Policy"
            cardContent="Know more about out basic policy on customer service and
            action guidelines"
          />
        </NavSubMenu>
      </NavList>
    </ul>
  );
};

export default NavLists;
