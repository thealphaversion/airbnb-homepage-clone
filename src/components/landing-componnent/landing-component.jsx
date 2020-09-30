// package imports
import React, { useState } from "react";

// component imports
// import NavbarComponent from "../navbar/navbar";
import NavigationBar from "../navbar/navigation-bar";
import CentralSearchBar from "../central-search-bar/central-search-bar";
import BannerBlob from "./banner-blob/banner-blob";

// data imports
import assets from "../../data/assets.json";

// css imports
import "./landing-component.css";

function LandingComponent() {
    const [navBar, setNavBar] = useState(false);

    const modifyNavbar = () => {
        if (window.scrollY >= 75) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener("scroll", modifyNavbar);

    return (
        <div className="landing-component-container">
            <NavigationBar navBar={navBar}></NavigationBar>
            <CentralSearchBar></CentralSearchBar>
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
