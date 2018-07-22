import React, { Component } from 'react';
import '../components/List.css';
import { Panel, Image, Grid, Row, Col } from 'react-bootstrap';

export default class List extends Component {

    render() {
        const data = this.props.data;

        if (this.props.data.length === 0) return <div><span>There are no items</span></div>;

        return (
            <div className="list-container">
                <Grid>
                    <Row>
                        {
                            data.map((d) => {
                                if (d.category === "locations") {
                                    return (
                                        <Col sm={6} md={4}>
                                            <Panel key={d.id} bsStyle='primary' className="list-panel">
                                                <Panel.Heading>
                                                    <Panel.Title componentClass="h3" className='primary'>{d.name}</Panel.Title>
                                                </Panel.Heading>

                                                <h1 className="char-name"><Image className="char-name-img" src={d.img} thumbnail width='354px'
                                                    height='245px' /></h1>
                                            </Panel>
                                        </Col>
                                    )
                                }
                            })
                        }
                    </Row>
                </Grid>
            </div>
        );
    }
}