import React from "react";
import "./Enter.css";
import entervideo from "../../Assets/Videos/entervideo.webm";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Enter() {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate("/allcomponent"); // Navigate to the next component (change '/next' as needed)
  };

  return (
    <div className="enter-container">
      <video autoPlay loop muted className="background-video">
        <source src={entervideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="black-overlay"></div>
      <Row className="maincontainer">
        <Row>
          <Col sm={1} md={1} lg={1}></Col>
          <Col sm={6} md={6} lg={6}>
            <h1 className="start-text">Drive</h1>
            <h1 className="end-text">Clean,</h1>
            <h1 className="start-text">Drive</h1>
            <h1 className="end-text">Proud</h1>
          </Col>
          <Col sm={5} md={5} lg={5}></Col>
        </Row>
        <Row className="rowflex">
          <Col sm={0} md={0} lg={0}></Col>
          <Col sm={6} md={6} lg={6}>
            <h6 className="h6text">Rocket Carwash, Coimbatore</h6>
          </Col>
          <Col className="but" sm={5} md={5} lg={5}>
            <div className="Enter" onClick={handleEnterClick}>
              Enter
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Enter;
