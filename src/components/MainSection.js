import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MainSection.css'

const MainSection = ({ title, description="", children , mdBreakpoint=8}) => {
  return (
    <Container fluid className="main-section-container">
      <Row className="justify-content-center text-center">
        <Col md={mdBreakpoint} lg={mdBreakpoint-2} xl={mdBreakpoint-4}>
          <div className="main-div">
            <h4>{title}</h4>
            <p>{description}</p>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
