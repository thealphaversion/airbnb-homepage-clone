// package imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// css imports
import "./central-search-bar.css";

function CentralSearchBar() {
    return (
        <div className="central-search-bar">
            <div className="central-search-bar-container">
                <a className="central-search-buttons" href="/" type="button">
                    <div className="central-search-button-title">Location</div>
                    <div className="central-search-button-subtitle">
                        Where are you going?
                    </div>
                </a>
                <a className="central-search-buttons" href="/" type="button">
                    <div className="central-search-button-title">Check in</div>
                    <div className="central-search-button-subtitle">
                        Add dates
                    </div>
                </a>
                <a className="central-search-buttons" href="/" type="button">
                    <div className="central-search-button-title">Check out</div>
                    <div className="central-search-button-subtitle">
                        Add dates
                    </div>
                </a>
                <a className="central-search-buttons" href="/" type="button">
                    <div className="central-search-button-title">Guests</div>
                    <div className="central-search-button-subtitle">
                        Add guests
                    </div>
                </a>
                <a
                    className="central-search-submit-button"
                    href="/"
                    type="button"
                >
                    <FontAwesomeIcon icon={faSearch} size={"1x"} />
                    &nbsp;&nbsp; Search
                </a>
            </div>
        </div>
    );
}

export default CentralSearchBar;
