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
      <Col  xs={1} md={1}>
       <LeftSidebar />
      </Col>
      <Col id="page-wrap" xs={11} md={11}>
      <div><h1> Mathilde Arconte</h1>
        <h2> Développeuse / Graphiste</h2></div>
      </Col>
    </Row>
    </Grid>
    );
  }
}