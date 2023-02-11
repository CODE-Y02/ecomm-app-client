import React from "react";
import { Container } from "react-bootstrap";

const Section = ({ children, title, className }) => {
  return (
    <section
      className={`d-flex flex-column justify-content-center align-items-center py-4 +${className}`}
    >
      {title && (
        <h2
          //   style={{ textAlign: "center", textTransform: "capitalize" }}
          className="mx-3 text-center text-capitalize text-decoration-underline "
        >
          {title}
        </h2>
      )}
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
