import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="Certificaciones"
      meta={{ desc: "¡Yo también soy un diseñador autodidacta entusiasta! Publico todos mis diseños web." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default designs;
