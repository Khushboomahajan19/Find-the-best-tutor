import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

import InfoSection from "../components/InfoSection";
import Courses from "./Courses";
import FAQSection from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
 const navigate = useNavigate();
  return (
    <>
     <Courses/>
      <InfoSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;
