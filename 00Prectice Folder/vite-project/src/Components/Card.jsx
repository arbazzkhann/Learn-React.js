import React from "react";

function Card({count}) {
    // let [count] = prop;
    return (
        <div>
            <h1>Count: {count} (from external component)</h1>
        </div>
    )
}

export default Card;