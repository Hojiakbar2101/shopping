import React from "react";
import Navbar from "../navbar/Navbar";
import Carousel from "./carousel/Carousel";
import Header from "./Header";
import Favorites from "./our/Favorites";
import Season from "./Season";
import Shoes from "./Shoes";
import data1 from "./data1.json";
import data2 from "./data2.json";
import data3 from "./data3.json";
import HeaderPage from "./HeaderPage";
import Sign from "./sign/Sign";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Favorites />
      <Shoes />
      <Season />
      <Carousel data={data1} title="Shop The Collections" />
      <HeaderPage
        img="./images/page_header3.png"
        title="Made From Nature, For Nature"
        des="We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, 
            because they're our best chance for a sustainable future."
        btnName="See How"
      />
      <br /><br /><br />
      <Carousel data={data2} title="New Arrivals"/>
      <br /><br /><br />
      <HeaderPage
        img="./images/page_header4.png"
        title="Reversing Climate Change Through Better Business"
        des="Reducing our environmental impact has been a top priority since day one. But now, we’re taking things further. Explore our overall sustainability approach, our progress thus far, and our bold list of commitments for 2025."
        btnName="Our Sustainable Practices"
      />
      <br /><br /><br />
      <Carousel data={data3} title="Stories"/>
      <br /><br /><br /><br />
      <Sign />
      <br /><br /><br /><br />
      <Footer />
    </>
  );
};

export default Home;
