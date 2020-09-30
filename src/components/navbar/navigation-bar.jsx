// package imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// css imports
import "./navigation-bar.css";

function NavigationBar(props) {
    const { navBar } = props;

    return (
        <React.Fragment>
            <nav
                className={
                    navBar
                        ? "navbar bg-light navbar-light navbar-expand-md fixed-top justify-content-center"
                        : "navbar navbar-expand-md fixed-top justify-content-center"
                }
            >
                <div>
                    <a href="/" type="button" className="navbar-brand mr-0">
                        <div
                            className={
                                navBar
                                    ? "navbar-brand-icon-light"
                                    : "navbar-brand-icon"
                            }
                        >
                            <FontAwesomeIcon icon={faAirbnb} size={"1x"} />
                        </div>
                        &nbsp;&nbsp;
                        <div className={navBar ? "logo-light" : ""}>airbnb</div>
                    </a>
                    <div className="search-container">
                        <a type="button" href="/" className="search-button">
                            <FontAwesomeIcon icon={faSearch} size={"1x"} />
                        </a>
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Where are you going?"
                        ></input>
                    </div>
                </div>
                <div
                    className="navbar-collapse collapse justify-content-between align-items-center"
                    id="collapsingNavbar"
                >
                    <ul className="navbar-nav mx-auto text-center">
                        <li className="nav-item active line">
                            <a href="/" type="button" className="nav-link">
                                Places to stay{" "}
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item line">
                            <a href="/" type="button" className="nav-link">
                                Experiences
                            </a>
                        </li>
                        <li className="nav-item line">
                            <a href="/" type="button" className="nav-link">
                                Online Experiences
                            </a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
                        <li className="nav-item">
                            <a className="nav-link" type="button" href="/">
                                <i className="fa fa-facebook mr-1"></i>
                            </a>{" "}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" type="button" href="/">
                                <i className="fa fa-twitter"></i>
                            </a>{" "}
                        </li>
                    </ul>
                    <li className="nav-item hover-button">
                        <button
                            type="button"
                            className={
                                navBar
                                    ? "hover-button-light btn"
                                    : "btn nav-link"
                            }
                        >
                            Become a host{" "}
                        </button>
                    </li>
                    <li className="nav-item dropdown hover-button">
                        <a
                            type="button"
                            href="/"
                            className={
                                navBar
                                    ? "hover-button-light dropdown-light dropdown-toggle"
                                    : "nav-link dropdown-toggle"
                            }
                            data-toggle="dropdown-menu"
                        >
                            <FontAwesomeIcon icon={faGlobe} size={"1x"} />
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/" type="button">
                                <FontAwesomeIcon icon={faGlobe} size={"1x"} />
                                &nbsp;English (IN)
                            </a>
                            <a className="dropdown-item" href="/" type="button">
                                <FontAwesomeIcon
                                    icon={faDollarSign}
                                    size={"1x"}
                                />
                                &nbsp;USD
                            </a>
                        </div>
                    </li>
                    <li
                        className={
                            navBar
                                ? "nav-item dropdown joined-button-light"
                                : "nav-item dropdown joined-button"
                        }
                    >
                        <a
                            type="button"
                            href="/"
                            className="nav-link dropdown"
                            data-toggle="dropdown-menu"
                        >
                            <FontAwesomeIcon
                                icon={faBars}
                                size={"1x"}
                                color="grey"
                            />
                            &nbsp;&nbsp;
                            <FontAwesomeIcon
                                icon={faUserCircle}
                                size={"1x"}
                                color="grey"
                            />
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/" type="button">
                                <FontAwesomeIcon icon={faBars} size={"1x"} />
                                &nbsp;English (IN)
                            </a>
                            <a className="dropdown-item" href="/" type="button">
                                <FontAwesomeIcon
                                    icon={faUserCircle}
                                    size={"1x"}
                                />
                                &nbsp;USD
                            </a>
                        </div>
                    </li>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavigationBar;
