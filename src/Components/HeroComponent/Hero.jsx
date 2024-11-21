import React from "react";
import "./Hero.css";
import mainvideo from "../../Assets/Videos/Herovideo.mp4";
import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid className="hero">
      <Row className="Content-dis">
        <Col className="Text-potion">
          <div className="text-section">
            <h1 className="sontspac">Experience Sparkling Clean Like Never Before!</h1>
            <p>
              Your car deserves the best. Drive into a shine that turns heads
              and protects your ride – all with our eco-friendly, premium wash
              services.
            </p>
            <button className="discover-button">Explore Our Service →</button>
          </div>
        </Col>
        <Col className="mainvideo">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={mainvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
