import React from "react";
import Container from "./Container";
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { RxReload } from "react-icons/rx";

import Flex from "./Flex";

const BannerService = () => {
  return (
    <>
      <div className="-mt-2 bg-[#F0F0F0] py-8 font-dm text-[10px] md:text-base">
        <Container>
          <Flex className="flex justify-between">
            <Flex className="flex items-center gap-4">
              <RiNumber2 />
              <div>Two years warranty</div>
            </Flex>
            <Flex className="flex items-center gap-4">
              <FaTruck />
              <div>Free shipping</div>
            </Flex>
            <Flex className="flex items-center gap-4">
              <RxReload />
              <div>Two years warranty</div>
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default BannerService;
