import React from "react";

export default function InfoCard(props) {
    return (
        <>
            <div>
                <h2>i am Info Card</h2>
                <p>Hello, {props.name} </p>
                <p>Age: {props.age}</p>
            </div>
        </>
    );
}