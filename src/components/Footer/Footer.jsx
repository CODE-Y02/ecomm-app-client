import { Col, Container, Row } from "react-bootstrap";
import { EnvelopeAtFill, Github, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgb(163, 219, 219)" }}>
      <Container className="p-3">
        <Row className=" text-center border-bottom border-dark  pb-3 ">
          <Col>
            <Github size={24} cursor="pointer" />
          </Col>
          <Col>
            <Linkedin size={24} cursor="pointer" />
          </Col>
          <Col>
            <EnvelopeAtFill size={24} cursor="pointer" />
          </Col>
        </Row>
        <Row className="mt-4 fw-bold">
          <Col className=" text-center"> Copyright @ code-y02 </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
