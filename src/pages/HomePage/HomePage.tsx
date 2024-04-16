import React from "react";
import Header from "../../components/Header";
import UserIntro from "./components/UserIntro";
import ProjectBrief from "./components/ProjectBrief";
import BlogBrief from "./components/BlogBrief";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <UserIntro />
      <ProjectBrief />
      <BlogBrief />
      <Footer />
    </>
  );
}

export default HomePage;
