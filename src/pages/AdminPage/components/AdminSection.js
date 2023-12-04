import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AdminSection.css'

const AdminSection = ({ title, description, children }) => {
  return (
    <Container fluid className="admin-section-container">
      <Row className="justify-content-center text-center">
        <Col md={14} lg={12} xl={10}>
          <div className="admin-div">
            <h4>{title}</h4>
            <p>{description}</p>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminSection;
