import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from './blog';
import { Grid, Row, Col, Image, Table, Well } from 'react-bootstrap';
import '../css/dashboard.css'

class dashboard extends Component {
	render() {
		return(
      <Grid>
        <div className="behind_the_text">
				
						<h1>Ares - For the Warrior In You</h1>
					
					<Row>
						<Col xs={12} sm={4}>
							<Image src="assets/progress_placeholder.jpg" circle className="progress_image" />
						</Col>
						<Col xs={12} sm={4}>
							<Table striped bordered className="exercises">
		            <thead>
                  <tr>
                    <th>Exercise</th>
                    <th>Reps</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Push Up</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Squats</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>Jumping Jacks</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td colSpan="2">Do 3 times</td>
                  </tr>
                </tbody>
							</Table>
						</Col>
            <Col xs={12} sm={4}>
              <div className="card">
                <div className="card-header">Your Challenges</div>
                  <div className="card-body">Current Challengers
                    <ul>
                      <li>Jerald</li>
                      <li>Fred</li>
                      <li>Luke</li>
                    </ul>
                  </div>
              </div>
            </Col>
					</Row>
				</div>
        <Blog />
			</Grid>
      
		);
	}
}

export default dashboard;