import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import data from './data';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Search from './Components/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      businesses: data,
      search: ''
    };
    this.searchBusiness = this.searchBusiness.bind(this);
  }

  searchBusiness(word) {
    this.setState({
      search: word
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Brand href="#home">Gender Equality</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Something here</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron fluid>
          <Container>
            <h1 className="pb-3">Gender Equality</h1>
            <h2>
              This is a modified jumbotron that occupies the entire horizontal space of its parent.
            </h2>
          </Container>
        </Jumbotron>
        <main>
          <div>Image here??</div>
          <section className="d-flex">
            <div className="col-6">
              <h3>01</h3>
              <h4>Title here</h4>
            </div>
            <div className="col-6">
              <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facere.</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eligendi aperiam
                natus. Explicabo eius, placeat exercitationem libero nostrum incidunt veniam.
              </p>
            </div>
          </section>
          <section className="d-flex">
            <div className="col-9">
              <div>Image here??</div>
            </div>
            <div className="col-3">
              <h3>02</h3>
              <h4>Title here</h4>
              <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facere.</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eligendi aperiam
                natus. Explicabo eius, placeat exercitationem libero nostrum incidunt veniam.
              </p>
            </div>
          </section>
          <section>
            <h3>03</h3>
            <h4>Title here</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eligendi aperiam
              natus. Explicabo eius, placeat exercitationem libero nostrum incidunt veniam.
            </p>
            <Search search={this.searchBusiness} />
            <div className="businessContainer">
              {/* businesses being rendered here */}
              {this.state.businesses.map(business => {
                if (
                  business.name.toLowerCase().includes(this.state.search) ||
                  business.calories.toLowerCase().includes(this.state.search)
                ) {
                  return (
                    <Accordion defaultActiveKey="0" className="pt-3 pb-3">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <div className="pb-3">{business.name}</div>
                            <ProgressBar now={60} />
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <div>{business.calories}</div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  );
                }
              })}
            </div>
          </section>
        </main>
        <footer>
          <p>footer is here</p>
        </footer>
      </div>
    );
  }
}

export default App;
