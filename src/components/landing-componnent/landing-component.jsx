// package imports
import React from "react";

// component imports
// import NavbarComponent from "../navbar/navbar";
import NavigationBar from "../navbar/navigation-bar";
import BannerBlob from "./banner-blob/banner-blob";

// data imports
import assets from "../../data/assets.json";

// css imports
import "./landing-component.css";

function LandingComponent() {
    return (
        <div className="landing-component-container">
            <NavigationBar></NavigationBar>
            <BannerBlob title="Explore nearby"></BannerBlob>
            <div className="landing-image-container">
                <img
                    src={assets["landing-image"]}
                    alt="horizon-art"
                    className="landing-image"
                ></img>
            </div>
        </div>
    );
}

export default LandingComponent;
