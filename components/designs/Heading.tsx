import React from "react";

function Heading() {
  return (
    <div className="py-16 sm:py-20 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
        Certificaciones
        <img
          className="sqD w-12 -top-6 -right-8 absolute"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl">
        Módulo para registrar y visualizar certificaciones técnicas verificables en tecnologías, frameworks y herramientas de desarrollo, demostrando el nivel de competencia y actualización profesional.
      </p>
    </div>
  );
}

export default Heading;
