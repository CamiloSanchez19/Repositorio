import React from "react";
import { designs } from "@/data/content/designs";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {designs.map((item, index) => {
        return (
          <div className="w-full" key={index}>
            <img
              className="w-full h-96 hover:opacity-75 transition-opacity object-cover"
              src={item.img}
              alt={item.label} // accesibilidad
            />
          </div>
        );
      })}
    </div>
  );
}

export default Designs;
