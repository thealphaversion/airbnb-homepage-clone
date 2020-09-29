// package imports
import React from "react";
import { Card } from "react-bootstrap";

// css imports
import "./cards.css";

function CardComponent(props) {
    const { cardData } = props;
    return (
        <div className="card-container">
            <Card style={{ borderRadius: "12px" }}>
                <Card.Img
                    src={cardData.img_url}
                    className="card-image"
                    style={{ borderRadius: "12px 12px 0px 0px" }}
                />
                <Card.Body>
                    <Card.Title
                        style={{ fontWeight: "bold", paddingBottom: "0px" }}
                    >
                        {cardData.title}
                    </Card.Title>
                    <Card.Text style={{ paddingTop: "0px" }}>
                        {cardData.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComponent;
