import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../components/MainSection.css'

const AuthSection = ({ title, description, children }) => {
  return (
    <Container fluid className="main-section-container">
      <Row className="justify-content-center text-center">
        <Col md={8} lg={6} xl={4}>
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

export default AuthSection;
