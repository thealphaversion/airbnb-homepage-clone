// package imports
import React from "react";
import CardComponent from "../cards/cards";

// css imports
import "./home-body.css";

// data imports
import cards from "../../data/card-data.json";

function HomeBody() {
    return (
        <div className="home-body-container">
            {cards.map((card, index) => {
                return (
                    <div className="home-body-grid-item" key={index}>
                        <CardComponent cardData={card}></CardComponent>
                    </div>
                );
            })}
        </div>
    );
}

export default HomeBody;
