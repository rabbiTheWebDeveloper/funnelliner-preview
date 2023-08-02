import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Css
import style from "./menubar.module.css";

const Menubar = (props) => {
  return (
    <section id="menubar" className="menubar">
      <Container>
        <Row>
          <Col lg={12}>
            <div id="menubarContent">
              <div>
                <Image src={props.logoImage} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Menubar;
