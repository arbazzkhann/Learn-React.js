import React from "react";

function MouseTracker(props) {
  const [X, setX] = React.useState(0);
  const [Y, setY] = React.useState(0);

  const handleMouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {props.render(X, Y)} {/*Render prop used here*/}
    </div>
  );
}

export default MouseTracker;
