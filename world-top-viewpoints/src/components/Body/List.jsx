import React, { Component } from 'react';
import '../Body/List.css';
import { Panel, Image, Grid, Row, Col } from 'react-bootstrap';

export default class List extends Component {

    onItemClicked = (event) => {
        this.props.handleClickedItem(event.target.getAttribute('item'));
    }

    render() {
        const data = this.props.data;
        if (this.props.data.length === 0) return <div><span>There are no items</span></div>;

        return (
            <div className="list-container">
                <Grid>
                    <Row>
                        {
                            data.map((d) => {

                                return (
                                    <Col key={d.id} sm={6}>
                                        <Panel bsStyle='primary' className="list-panel" >
                                            <Panel.Heading>
                                                <Panel.Title componentClass="h3" className='primary'>{d.name}</Panel.Title>
                                            </Panel.Heading>

                                            <h1 className="char-name" onClick={this.onItemClicked}>
                                                <Image className="char-name-img" src={d.img} item={d.name} thumbnail responsive />
                                            </h1>
                                        </Panel>
                                    </Col>
                                )

                            })
                        }
                    </Row>
                </Grid>
            </div>
        );
    }
}