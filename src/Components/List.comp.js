import React from "react";

const Listing = (props) => {
    return (
        <div>
            <h1>{props.list.name}</h1>
            <p> {props.list.description}</p>
        </div>
    );
};

export default Listing;