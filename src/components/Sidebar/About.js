import React, { Component } from 'react';
import {Grid, Col, Row, Thumbnail} from 'react-bootstrap';

export default class About extends React.Component {
    render() {
        return (
            <div>
<p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.
liveloop.fr marconte.tumblr.fr</p>
<h3>Hobbies</h3>
{/*<ul className="listHobbies">
  <li className="listItemHobbies"><img src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" alt=""/></li>
  <li className="listItemHobbies"><img src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" alt=""/></li>
  <li className="listItemHobbies"><img src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" alt=""/></li>
  <li className="listItemHobbies"><img src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" alt=""/></li>
  <li className="listItemHobbies"><img src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" alt=""/></li>
  <li className="listItemHobbies"><img src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" alt=""/></li>
  </ul>*/}
  <Grid>
  <Row>
  <Col xs={6} md={4}>
    <Thumbnail alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail  alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail  alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail  alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail  alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail  alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail  alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail  alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail  alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail  alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  <Col xs={6} md={4}>
    <Thumbnail  alt="171x180" src="https://s-media-cache-ak0.pinimg.com/736x/d1/00/05/d10005bd8decb8c4cc60266bb45c7bb6.jpg" />
  </Col>
  </Row>
</Grid>
            </div>
             
        );
    }
}