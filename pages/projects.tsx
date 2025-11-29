import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Proyectos"
      meta={{ title: "Projects", desc: "Me encanta programar usando herramientas como React, NextJS, Tailwind y muchas más. Aquí están algunos de mis proyectos favoritos." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
