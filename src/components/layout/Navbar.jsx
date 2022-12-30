import Flex from "./Flex";
import Images from "./Images";
import List from "./List";
import Listitem from "./Listitem";
import { GoThreeBars } from "react-icons/go";
import { useEffect, useState } from "react";
import React from "react";
import Container from "./Container";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    myresize();
    function myresize() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    window.addEventListener("resize", myresize);
  }, []);

  return (
    <Container>
      <Flex className="block items-center justify-between py-8	lg:flex">
        <div className="flex w-full items-center lg:w-2/6 ">
          <Images imgsrc="./assets/logo.png" />
          <GoThreeBars
            onClick={() => setShow(!show)}
            className="	 blcok ml-auto lg:hidden "
          />
        </div>

        <div className="w-full lg:w-2/3 ">
          {show && (
            <List className="mt-4 block items-center	justify-end gap-x-10 text-center font-dm text-sm  font-bold leading-4 text-[#767676] lg:mt-0 lg:flex">
              <Listitem
                to="/"
                className="mt-4 hover:text-[#262626] lg:mt-0 "
                item={"Home"}
              />
              <Listitem
                to="/shop"
                className="mt-4 hover:text-[#262626] lg:mt-0 "
                item={"Shop"}
              />
              <Listitem
                className="mt-4 hover:text-[#262626] lg:mt-0 "
                item={"About"}
              />
              <Listitem
                className="mt-4 hover:text-[#262626] lg:mt-0 "
                item={"Contacts"}
              />
              <Listitem
                className="mt-4 hover:text-[#262626] lg:mt-0 "
                item={"Journal"}
              />
            </List>
          )}
        </div>
      </Flex>
    </Container>
  );
};

export default Navbar;
