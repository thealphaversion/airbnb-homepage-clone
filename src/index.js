import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home";
import "./assets/fonts.css";
import "jquery/dist/jquery.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById("root")
);
