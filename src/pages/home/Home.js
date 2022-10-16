import React from "react";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import About_atq from "../ABOUT_ATQ/About_atq";
import Adversting from "../adversting/Adversting";
import Carousel from "../carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Adversting />
      <Carousel />
      <About_atq />
    </div>
  );
};

export default Home;
