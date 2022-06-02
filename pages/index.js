import React, { Fragment } from "react";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";

export default function Home() {

    return (
        <Fragment>
            <Navbar />
            <Hero />
        </Fragment>
    )
};
