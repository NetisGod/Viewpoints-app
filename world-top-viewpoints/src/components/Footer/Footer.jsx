import React, { Component } from 'react';
import '../Footer/Footer.css';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <Grid>
                    <Row>
                        <Col sm={3}>
                            <h4><a href="#">Popular Photos</a></h4>
                        </Col>

                        <Col sm={2}>
                            <h4><a href="#">Popular Viewpoints</a></h4>
                        </Col>

                        <Col sm={2}>
                            <h4><a href="#">Popular Locations</a></h4>
                        </Col>

                        <Col sm={2}>
                            <h4><a href="#">Popular Cities</a></h4>
                        </Col>

                        <Col sm={3}>
                            <h4><a href="#">Popular Countries</a></h4>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
