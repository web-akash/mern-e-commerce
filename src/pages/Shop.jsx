import React, { useState } from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Mypagination from "../components/layout/Mypagination";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import ProductFilter from "../components/layout/ProductFilter";
const Shop = () => {
  let [show, setShow] = useState(12);
  let handelShowNubmer = (e) => {
    console.log(+e.target.value);
    setShow(+e.target.value);
  };
  return (
    <>
      <Breadcrumb titel="Products" />
      <Container>
        <Flex className="mt-12 flex gap-x-12">
          <div className="w-[25%] bg-gray-100">Home</div>
          <div className="w-[75%]">
            <Flex className="mb-16 flex items-center justify-end gap-3 ">
              <ProductFilter titel="sort by:">
                <option selected>Featured</option>
                <option value="US">Best Product</option>
                <option value="US">Good Product</option>
              </ProductFilter>
              <ProductFilter onChange={handelShowNubmer} titel="Show:">
                <option selected>12</option>
                <option>24</option>
                <option>48</option>
              </ProductFilter>
            </Flex>

            <div>
              <Mypagination itemsPerPage={show} />
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Shop;
