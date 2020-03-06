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
    this.filterBusiness = this.filterBusiness.bind(this);
  }

  searchBusiness(word) {
    this.setState({
      search: word
    });
  }

  filterBusiness(filter) {
    console.log(filter);
    if (filter === 'ascendingEquality') {
      this.setState({
        businesses: [...data].sort(
          (rankingMin, rankingMax) =>
            rankingMin.calories.toString() - rankingMax.calories.toString()
        )
      });
    } else if (filter === 'descendingEquality') {
      this.setState({
        businesses: [...data].sort(
          (rankingMin, rankingMax) =>
            rankingMax.calories.toString() - rankingMin.calories.toString()
        )
      });
    }
    // this.setState({
    //   search: filter
    // });
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <Navbar>
<<<<<<< HEAD
          <Navbar.Brand href="#home">
            <img src="./Images/genderpic.png" alt="genderpic" />
            Gender Equality
          </Navbar.Brand>
=======
          <Navbar.Brand onClick={this.scrollTop}>Gender Equality</Navbar.Brand>
>>>>>>> 96baaadc59528b3feb2c037ea51d4e671e608db0
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Government Subsurdised Company</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
<<<<<<< HEAD
        <Jumbotron fluid>
          <Container>
            <h1 className="pb-3">The Equality Group</h1>
            <h2>
              We are a government subsidised company that created a simplified approach to measure
              national gender equality in working environment. We aim to promote gender equality in
              the workforce and requiring companies to report gender gap metrics and increasingly
              implementing their own policies to close gender gaps.
            </h2>
          </Container>
        </Jumbotron>
=======
>>>>>>> 96baaadc59528b3feb2c037ea51d4e671e608db0
        <main>
          <Jumbotron fluid>
            <Container>
              <h1 className="pb-3">The Equality Group</h1>
              <h2>
                We are a government subsidised company that aims to provide job seekers the
                opportunity to see whether a business values equality.
              </h2>
            </Container>
          </Jumbotron>
          <div className="image-one"></div>
          <section className="d-flex pt-5 pb-5">
            <div className="col-6">
              <h3>01</h3>
              <h4 className="pb-5">Check which companies values equality</h4>
            </div>
            <div className="col-6">
              <h5>Are you a joob seeker?</h5>
              <p>
                Deciding where to apply for a job can be challenging – if equal employment
                opportunity matters to you, check organisations that value that principle.
              </p>
            </div>
          </section>
          <section className="d-flex pt-5 pb-5">
            <div className="col-8">
              <div className="image-two"></div>
            </div>
            <div className="col-4">
              <div className="space">
                <h3>02</h3>
                <h4 className="pb-5">Check the companies with the best practices</h4>
              </div>
              <h5>Companies that offer parental bennefits</h5>
              <p>
                Offers flex-time, pays a living wage, has a strategy to close the gender pay gap and
                offers paid family leave to both parents
              </p>
            </div>
          </section>
          <section className="d-flex pt-5 pb-5">
            <div className="col-5">
              <h3>03</h3>
              <h4 className="pb-5">Discover ways to make your company more gender equal</h4>
              <h5>Are you a company that want to improve Gender Equality In The Workplace?</h5>
              <p>
                {' '}
                You are in the right place. We provide the best ideas and practises. Stereotypes are
                still an issue in business. Employees are often judged by their gender, not their
                abilities. As a business owner, we can you help change this situation – and get the
                best out of all your staff.
              </p>
            </div>
            <div className="col-7">
              <div className="image-three"></div>
            </div>
          </section>
          <section className="pt-5">
            <h3>04</h3>
            <h4 className="pb-5">Search here for the business </h4>
<<<<<<< HEAD
            <p>Search by industry type or company name.</p>
            <Search search={this.searchBusiness} />
=======
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eligendi aperiam
              natus. Explicabo eius, placeat exercitationem libero nostrum incidunt veniam.
            </p>
            <Search search={this.searchBusiness} filter={this.filterBusiness} />
>>>>>>> 96baaadc59528b3feb2c037ea51d4e671e608db0
            <div className="businessContainer">
              {/* businesses being rendered here */}
              {this.state.businesses.map(business => {
                if (
                  business.name.toLowerCase().includes(this.state.search) ||
                  business.calories.toLowerCase().includes(this.state.search)
                ) {
                  return (
                    <Accordion defaultActiveKey="0" className="pt-3 pb-3">
                      <Card className="hvr-grow">
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <h2>{business.name}</h2>
                            <div className="pb-3 d-flex">
                              <section className="col-6">
                                <div className="indiviudal">
                                  Number of Employees: {business.calories}
                                </div>
                                <div className="indiviudal">Business Age : .....</div>
                              </section>
                              <section className="col-6">
                                <div className="indiviudal">Business Type: .....</div>
                                <div className="indiviudal">
                                  Special benefits for parenting: .....
                                </div>
                              </section>
                            </div>
                            <ProgressBar now={60} />
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body className="comparisons">
                            <section>
                              <h5>Number of women to men</h5>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar variant="success" now={50} label={'50%'} key={1} />
                                <ProgressBar variant="warning" now={50} label={'50%'} key={2} />
                              </ProgressBar>
                            </section>
                            <section>
                              <h5>Number of women to men per position</h5>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar variant="success" now={50} label={'50%'} key={1} />
                                <ProgressBar variant="warning" now={50} label={'50%'} key={2} />
                              </ProgressBar>
                            </section>
                            <section>
                              <h5>Wages in different positions</h5>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar variant="success" now={50} label={'50%'} key={1} />
                                <ProgressBar variant="warning" now={50} label={'50%'} key={2} />
                              </ProgressBar>
                            </section>
                            <section>
                              <h5>People hired after 30+</h5>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar variant="success" now={50} label={'50%'} key={1} />
                                <ProgressBar variant="warning" now={50} label={'50%'} key={2} />
                              </ProgressBar>
                            </section>
                            <section>
                              <h5>Gender and type of contract relation</h5>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar variant="success" now={50} label={'50%'} key={1} />
                                <ProgressBar variant="warning" now={50} label={'50%'} key={2} />
                              </ProgressBar>
                            </section>
                            <section>
                              <h5>Number of gender applicants or interns</h5>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar variant="success" now={50} label={'50%'} key={1} />
                                <ProgressBar variant="warning" now={50} label={'50%'} key={2} />
                              </ProgressBar>
                            </section>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  );
                }
              })}
            </div>
          </section>
          <section className="centered pt-5 pb-5">
            <h3>05</h3>
            <h4 className="pb-3">Let us know what you think</h4>
            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facere.</h5>
            <p></p>
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
