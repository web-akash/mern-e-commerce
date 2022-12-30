import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Images from "./Images";

const Middeladd = () => {
  return (
    <Container>
      <Link to="#">
        <Images className="mt-10 lg:mt-32" imgsrc="assets/middeladd.png" />
      </Link>
    </Container>
  );
};

export default Middeladd;
