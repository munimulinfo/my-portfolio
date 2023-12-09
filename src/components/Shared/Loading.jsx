import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className="
      h-[100vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <ScaleLoader size={100} color="#800080" />
    </div>
  );
};

export default Loading;
