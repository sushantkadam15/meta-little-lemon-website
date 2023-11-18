import React from "react";
import { Construction } from "lucide-react";

const UnderConstruction = () => {
  return (
    <>
      <div className=" flex gap-5 text-7xl text-primary justify-center h-[60vh]  items-center">
        Under Construction
        <Construction size={80} />
      </div>
    </>
  );
};

export default UnderConstruction;
