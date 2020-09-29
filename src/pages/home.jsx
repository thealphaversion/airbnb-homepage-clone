// package imports
import React from "react";

// component imports
import LandingComponent from "../components/landing-componnent/landing-component";
import HomeBody from "../components/home-body/home-body";

// css imports
import "./home.css";

function Home() {
    return (
        <div className="home">
            <LandingComponent></LandingComponent>
            <HomeBody></HomeBody>
        </div>
    );
}

export default Home;
