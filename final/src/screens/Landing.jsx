import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
//import HomeFooter from "../components/Nav/HomeFotter";
/*import Services from "../components/Sections/Services";


import Projects from "../components/Sections/Projects";*/
//import Blog from "../components/Sections/Blog";
//import Pricing from "../components/Sections/Pricing";
//import Contact from "../components/Sections/Contact";
      
      
 /*     <Projects />
      <Blog />
      <Pricing />
      <Contact />
*/
import Footer from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      {/*<Blog />*/}
      {/*<Contact />*/}
      <Footer />
    </>
  );
}


