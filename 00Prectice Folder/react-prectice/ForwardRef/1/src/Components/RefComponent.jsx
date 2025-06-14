import React from "react";
import { forwardRef } from "react";

const RefComponent = (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
};

// export default RefComponent;
export default forwardRef(RefComponent);
