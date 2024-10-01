import React from "react";

export const ImageCard = ({ imageSrc, title, text }) => {
    const cardStyle = {
        width: "18rem", // Set a fixed width for the card

    };

    const imgStyle = {
        height: "auto",
        maxHeight: "100%", // Ensures the image covers the area without stretching
        width: "100%", // Ensures the image fits the width of the card
    };

    return (
        <div>
        <div className="card" style={cardStyle}>
            <div className="" style={{ height: "18rem" }}>
                <img
                    src={imageSrc}
                    className="card-img-top"
                    alt={title}
                    style={imgStyle}
                />
            </div>

            <div className="card-body hq-card-background">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
        </div>
    );
};