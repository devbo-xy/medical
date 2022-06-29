import React, { Fragment } from "react";
import { Footer } from "../src/components/Footer";
import Content from "../src/components/Home/Content";
import Hero from "../src/components/Home/Hero";
import Navbar from "../src/components/Navbar";
export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </Fragment>
  );
}
