import React from "react";

export default function InfoCard(props) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-64 h-40" src={props.image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base">{props.age}</p>
        </div>
        <div className="px-6 pt-4 pb-2"></div>
      </div>
      Horizontal
    </>
  );
}
