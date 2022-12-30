import React, { useEffect, useRef, useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import List from "./List";
import Listitem from "./Listitem";
import Search from "./Search";
import { ImSearch } from "react-icons/im";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";

import Images from "./Images";

const Header = () => {
  let [show, setShow] = useState(false);
  let [userDown, setuserDown] = useState(false);
  let [shopDropDown, setShopDropDown] = useState(false);
  let ref = useRef();
  let userRef = useRef();
  let shopRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setuserDown(true);
      } else {
        setuserDown(false);
      }
      if (shopRef.current.contains(e.target)) {
        setShopDropDown(true);
      } else {
        setShopDropDown(false);
      }
    });
  }, []);

  return (
    <>
      <div className=" bg-[#F5F5F3]">
        <Container>
          <Flex className="flex items-center justify-between text-sm text-[#262626]">
            <Dropdown togolref={ref} className="z-50">
              <div className="flex items-center gap-x-2 py-6">
                <RiBarChartHorizontalLine />
                <p>Shop by Category</p>
              </div>
              {show && (
                <List className="absolute w-[263px] bg-primery font-dm text-sm text-[#ffffff70]">
                  <Listitem
                    className="border border-solid border-[#2D2D2D] py-4 pl-5 transition-all hover:pl-9 hover:text-white"
                    item={"Accesories"}
                  ></Listitem>
                  <Listitem
                    className="border border-solid border-[#2D2D2D] py-4 pl-5 transition-all hover:pl-9 hover:text-white"
                    item={"Furniture"}
                  ></Listitem>
                  <Listitem
                    className="border border-solid border-[#2D2D2D] py-4 pl-5 transition-all hover:pl-9 hover:text-white"
                    item={"Electronics"}
                  ></Listitem>
                  <Listitem
                    className="border border-solid border-[#2D2D2D] py-4 pl-5 transition-all hover:pl-9 hover:text-white"
                    item={"Clothes"}
                  ></Listitem>
                  <Listitem
                    className="border border-solid border-[#2D2D2D] py-4 pl-5 transition-all hover:pl-9 hover:text-white"
                    item={"Bags"}
                  ></Listitem>
                  <Listitem
                    className="  border border-solid border-[#2D2D2D] py-4 pl-5 transition-all hover:pl-9 hover:text-white"
                    item={"Home appliances"}
                  ></Listitem>
                </List>
              )}
            </Dropdown>

            <div className="relative flex w-[601px] items-center bg-blue-100">
              <Search
                className="w-full py-4 pl-5"
                placeholder={"Search Products"}
              />
              <ImSearch className="absolute right-3" />
            </div>

            <div className="flex gap-2 px-2 md:gap-10">
              <Dropdown className="relative z-50" togolref={userRef}>
                <Flex className="flex items-center">
                  <FaUserAlt />
                  <IoMdArrowDropdown />
                </Flex>
                {userDown && (
                  <List className="absolute right-1 top-4 w-[200px] border border-solid border-[#F0F0F0] bg-white text-center text-white">
                    <Listitem
                      className="bg-primery py-4 text-sm font-bold"
                      item="My Acount"
                    />
                    <Listitem
                      className="bg-white py-4 text-sm  font-bold text-black"
                      item="LogOut"
                    />
                  </List>
                )}
              </Dropdown>

              <Dropdown className="z-50" togolref={shopRef}>
                <div className="relative">
                  <div>
                    <FaShoppingCart />
                  </div>
                  {shopDropDown && (
                    <div className="absolute right-0 w-[358px] ">
                      <div className="bg-[#F5F5F3] p-5">
                        <Flex className="flex items-center justify-between">
                          <Images imgsrc="assets/2_grande 5.png" />
                          <div>
                            <h3 className="mb-3 font-dm text-sm font-bold ">
                              Black Smart Watch
                            </h3>
                            <p>$44.00</p>
                          </div>

                          <GrFormClose className="text-xl" />
                        </Flex>
                      </div>

                      <div className="bg-white p-5">
                        <h3 className="mb-3 font-dm text-base text-[#767676]">
                          Subtotal:{" "}
                          <span className="font-bold text-[#262626]">
                            $44.00
                          </span>
                        </h3>
                        <button className="mr-5 border px-10 py-4 font-dm text-sm font-bold text-[#262626] transition-colors hover:bg-primery hover:text-white">
                          View Cart
                        </button>
                        <button className="border px-10 py-4 font-dm text-sm font-bold text-[#262626] transition-colors hover:bg-primery hover:text-white">
                          Checkout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </Dropdown>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
