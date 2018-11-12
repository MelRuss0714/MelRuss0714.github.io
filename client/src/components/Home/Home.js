import React from 'react';
import './Home.css';
import { Grid, Col, Row } from 'react-bootstrap';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import LargePic from '../ProfilePics/LargePic';
import BrandStatement from './BrandStatement/BrandStatement';
import BubblinkSample from './Samples/BubblinkSample';
import SmartRockSample from './Samples/SmartRockSample';
import PoppySample from './Samples/PoppySample';



export default class Home extends React.Component {


    render() {
        return (
            <div className='Home'>
                <Navbar />
                <LargePic />
                <BrandStatement />
                <Grid>
                    <Row className='Samples'>
                        <Col xsHidden md={2}>
                        </Col>
                        <Col xs={12} md={3}>
                            <BubblinkSample />
                        </Col>
                        <Col xs={12} md={3}>
                            <SmartRockSample />
                        </Col>
                        <Col xs={12} md={3}>
                            <PoppySample />
                        </Col>
                        <Col xsHidden md={2}>
                        </Col>
                    </Row>

                </Grid>
                <Footer />

            </div>
        );
    }
}