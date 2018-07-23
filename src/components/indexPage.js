import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../css/indexPage.css'


class indexPage extends Component {
	render() {
		return (
			
				<div className="testing">
					<Image src="assets/ares_imageOne.png" className="ares_image" />
					<Row>
						<Button bsStyle="danger center-block" bsSize="large" className="enterHere">ENTER HERE IF YOU DARE, BRAVE SOUL</Button>
					</Row>
				</div>
			
			);
	}
}

export default indexPage;