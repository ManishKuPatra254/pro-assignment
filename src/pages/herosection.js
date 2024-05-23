import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function Herosection() {
    return (
        <Fragment>
            <Container fluid className="main_hero_section py-5">
                <Row className="justify-content-center align-items-center">
                    <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
                        <h5 className="fw-bold">Welcome to MediCare+ Clinic</h5>
                        <h1 className="display-4 fw-bold special_text">Best Specialists</h1>
                        <p className="lead fw-semibold">
                            We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.
                        </p>
                        <div className="hero-button d-flex justify-content-between justify-content-md-start gap-3 mt-4">
                            <Button>Make an Appointment</Button>
                            <Button>Departments</Button>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <Card className="hero-card">
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
