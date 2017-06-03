import React, { Component } from 'react';
import {Grid, Col, Row, Thumbnail, Media} from 'react-bootstrap';

export default class CV extends React.Component {
    render() {
        return (
  <div>
      <h3>Experience Pro</h3>
    <Media>
      <Media.Left align="middle">
        <img width={80} height={80} src="/assets/thumbnail.png" alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Poste</Media.Heading>
        <p className="media-firm">Entreprise</p>
        <p className="media-date">mois 2017 - mois 2017</p>
      </Media.Body>
    </Media>
        <Media>
      <Media.Left align="middle">
        <img width={80} height={80} src="/assets/thumbnail.png" alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Poste</Media.Heading>
        <p className="media-firm">Entreprise</p>
        <p className="media-date">mois 2017 - mois 2017</p>
      </Media.Body>
    </Media>
        <Media>
      <Media.Left align="middle">
        <img width={80} height={80} src="/assets/thumbnail.png" alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Poste</Media.Heading>
        <p className="media-firm">Entreprise</p>
        <p className="media-date">mois 2017 - mois 2017</p>
      </Media.Body>
    </Media>
         <h3> Formation</h3>
        <Media>
      <Media.Left align="middle">
        <img width={80} height={80} src="/assets/thumbnail.png" alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Ecole</Media.Heading>
        <p className="media-firm">Diplome</p>
        <p className="media-date">mois 2017 - mois 2017</p>
      </Media.Body>
    </Media>
        <Media>
      <Media.Left align="middle">
        <img width={80} height={80} src="/assets/thumbnail.png" alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Ecole</Media.Heading>
        <p className="media-firm">Diplome</p>
        <p className="media-date">mois 2017 - mois 2017</p>
      </Media.Body>
    </Media>
        <Media>
      <Media.Left align="middle">
        <img width={80} height={80} src="/assets/thumbnail.png" alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Ecole</Media.Heading>
        <p className="media-firm">Diplome</p>
        <p className="media-date">mois 2017 - mois 2017</p>
      </Media.Body>
    </Media>
  </div>
        );
    }
}