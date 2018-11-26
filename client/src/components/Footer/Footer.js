import React from 'react';
import './Footer.css';
import { Grid, Col, Row } from 'react-bootstrap';


function Footer(props) {
    return (

        <Grid className="page-footer">
            <Row >
                <Col xs={12} md={4}>
                    <p className="links">© 2018 Melinda Russell</p>
                </Col>
                <Col xsHidden md={4}>
                </Col>
                <Col className="icons" xs={12} md={4}>
                    <i id="firstIcon" className="fab fa-html5"></i>
                    <i className="fab fa-css3"></i>
                    <i className="fab fa-font-awesome"></i>
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                </Col>
            </Row>

        </Grid>

    )
}

export default Footer;