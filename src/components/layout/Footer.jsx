import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import Listitem from "./Listitem";
import Images from "./Images";
import Footerlistitem from "./Footerlistitem";
import Footerinfo from "./Footerinfo";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex flex-wrap">
          <div className="w-1/2 lg:w-[10%]">
            <Footerlistitem
              className="mb-4 font-dm text-base font-bold"
              MenuTitel="MENU"
            >
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Home"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Shop"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="About"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Contact"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Journal"
              />
            </Footerlistitem>
          </div>
          <div className="w1/2 lg:w-[10%]">
            <Footerlistitem
              className="mb-4 font-dm text-base font-bold"
              MenuTitel="Shop"
            >
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Category 1"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Category 2"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Category 3"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Category 4"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Category 5"
              />
            </Footerlistitem>
          </div>
          <div className="mt-4 w-1/2 lg:mt-0 lg:w-[10%]">
            <Footerlistitem
              className="mb-4 font-dm text-base font-bold"
              MenuTitel="Shop"
            >
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Privacy Policy"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Terms & Conditions"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Special E-shop"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Shipping"
              />
              <Listitem
                className="mb-1 font-dm text-sm text-[#6D6D6D]"
                item="Secure Payments"
              />
            </Footerlistitem>
          </div>
          <div className="mt-4 flex w-1/2 justify-center lg:mt-0 lg:w-[30%]">
            <Footerinfo>
              <Listitem
                className="font-dm text-base font-bold text-[#262626]"
                item="(052) 611-5711"
              />
              <Listitem
                className="font-dm text-base font-bold text-[#262626]"
                item="company@domain.com"
              />
              <Listitem
                className="mt-4 font-dm text-sm text-[#6D6D6D]"
                item="575 Crescent Ave. Quakertown, PA 18951"
              />
            </Footerinfo>
          </div>
          <div className="flex w-full  justify-center lg:inline-block lg:w-[40%]">
            <Images imgsrc="assets/logo.png" />
          </div>
        </Flex>
        <Flex className="mt-4 flex  flex-wrap items-center  justify-between lg:mt-16">
          <div className=" flex w-full justify-center gap-6  text-center text-xl lg:w-auto">
            <Link to="#">
              <FaFacebookF />
            </Link>
            <Link to="#">
              <AiFillInstagram />
            </Link>
            <Link to="#">
              <AiFillLinkedin />
            </Link>
          </div>
          <p className=" mt-4 w-full text-center font-dm text-sm text-[#6D6D6D] lg:mt-0 lg:w-auto">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
