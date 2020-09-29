// package imports
import React from "react";

// css imports
import "./banner-blob.css";

function Button(props) {
    const { title, onPress } = props;
    return (
        <div className="banner-blob">
            <div className="banner-blob-title">Go Near</div>
            <div className="banner-blob-text">
                Settle in somewhere new. Discover nearby stays to live, work, or
                just relax.
            </div>
            <button onClick={onPress} className="banner-blob-button">
                {title}
            </button>
        </div>
    );
}

export default Button;
