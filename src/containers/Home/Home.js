import React, { Component, PropTypes } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';
import {Container} from 'theme/grid';
import LeftSidebar from 'containers/Sidebar/Sidebar'

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
  <Grid>
    <Row id="outer-container" className="show-grid">
      <Col  xs={3} md={3}>
       <LeftSidebar />
      </Col>
      <Col id="page-wrap" xs={9} md={9}>
      <div><h1> Mathilde Arconre</h1>
        <h2> Développeuse / Graphiste</h2></div>
      </Col>
    </Row>
    </Grid>
    );
  }
}