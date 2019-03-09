import React from "react";
import "./style.css";

function PicCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.id} src={props.image} />
            </div>
        </div>
    );
}

export default PicCard;