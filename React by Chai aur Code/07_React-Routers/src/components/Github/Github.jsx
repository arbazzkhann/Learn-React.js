import React, { PureComponent, useEffect, useState } from "react";

function Github() {
   
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://api.github.com/users/arbazzkhann")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }, []);

    return (
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Image not found" width="300px"/>
      </div>
    );
  }


export default Github;
