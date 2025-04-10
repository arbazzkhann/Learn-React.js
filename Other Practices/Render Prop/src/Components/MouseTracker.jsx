import React, { useState } from 'react'

const MouseTracker = (props) => {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const handleMouseMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    return (
        <div onMouseMove={handleMouseMove} style={{ height: "100vh" }}>
            {props.render(X, Y)}    
        </div>
    )
}

export default MouseTracker
