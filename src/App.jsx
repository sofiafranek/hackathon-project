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
      search: '',
      style: 'red'
    };
    this.searchBusiness = this.searchBusiness.bind(this);
    this.filterBusiness = this.filterBusiness.bind(this);
  }

  searchBusiness(word) {
    // console.log(word);
    // if (this.state.search !== word) {
    //   this.setState({
    //     search: 'No Business or Industry found, please try again'
    //   });
    // }
    this.setState({
      search: word
    });
  }

  filterBusiness(filter) {
    console.log(filter);
    if (filter === 'ascendingEquality') {
      this.setState({
        businesses: [...data].sort(
          (rankingMin, rankingMax) => rankingMin.ranking.toString() - rankingMax.ranking.toString()
        )
      });
    } else if (filter === 'descendingEquality') {
      this.setState({
        businesses: [...data].sort(
          (rankingMin, rankingMax) => rankingMax.ranking.toString() - rankingMin.ranking.toString()
        )
      });
    }
    if (filter === 'descendingEmployees') {
      this.setState({
        businesses: [...data].sort(
          (rankingMin, rankingMax) =>
            rankingMax.num_of_employees.toString() - rankingMin.num_of_employees.toString()
        )
      });
    } else if (filter === 'ascendingEmployees') {
      this.setState({
        businesses: [...data].sort(
          (rankingMin, rankingMax) =>
            rankingMin.num_of_employees.toString() - rankingMax.num_of_employees.toString()
        )
      });
    }
  }

  randomKey(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Brand>
            <span onClick={this.scrollTop}>
              <img className="logo-pic" src="./Images/genderpic.png" alt="genderpic" />
              Equality Collective
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar>
        <main>
          <Jumbotron fluid>
            <Container>
              <h1 className="pb-3">Equality Collective</h1>
              <h2>
                We are a company that created a simplified approach to measure national gender
                equality in working environments. We work directly for the Government, auditing
                companies in order to verify if they comply with the designated standards for gender
                equality in the workplace. We aim to promote gender equality in the workforce and
                requiring companies to report gender gap metrics and increasingly implementing their
                own policies to close gender gaps.
              </h2>
            </Container>
          </Jumbotron>
          <div className="border-offset-left">
            <div className="image-one"></div>
          </div>
          <section className="d-flex pt-5 pb-5 ">
            <div className="col-6">
              <h3>
                <img className="icon" src="./Images/laptop.png" alt="icon" />
              </h3>
              <h4 className="pb-5">Check which companies values equality</h4>
            </div>
            <div className="col-6 padTop">
              <h5>Are you a job seeker?</h5>
              <p>
                Deciding where to apply for a job can be challenging – if equal employment
                opportunity matters to you, check organisations that value that principle. Workplace
                gender equality is achieved when people are able to access and enjoy the same
                rewards, resources and opportunities regardless of gender. The aim of gender
                equality in the workplace is to achieve broadly equal outcomes for women and men,
                not necessarily outcomes that are exactly the same for all.
              </p>
            </div>
          </section>
          <section className="d-flex pt-5 pb-5">
            <div className="col-7">
              <div className="border-offset-right">
                <div className="image-two"></div>
              </div>
            </div>
            <div className="col-5">
              <div className="space">
                <h3>
                  {' '}
                  <img className="icon" src="./Images/volunteer.png" alt="icon" />
                </h3>
                <h4 className="pb-5">Check the companies with the best practices</h4>
              </div>
              <h5>Go for the green ones</h5>
              <p>
                To achieve this requires: Workplaces to provide equal pay for work of equal or
                comparable value Removal of barriers to the full and equal participation of women in
                the workforce Access to all occupations and industries, including leadership roles,
                regardless of gender; and Elimination of discrimination on the basis of gender,
                particularly in relation to family and caring responsibilities.
              </p>
            </div>
          </section>
          <section className="d-flex pb-5 spacing">
            <div className="col-5">
              <h3>
                <img className="icon" src="./Images/equal.png" alt="icon" />
              </h3>
              <h4 className="pb-5">Discover ways to make your company more gender equal</h4>
              <h5>Are you a company that want to improve Gender Equality In The Workplace?</h5>
              <p>
                You are in the right place. We provide the best ideas and practises. Stereotypes are
                still an issue in business. Employees are often judged by their gender, not their
                abilities. As a business owner, we can you help change this situation – and get the
                best out of all your staff. Workplace gender equality is associated with: Improved
                national productivity and economic growth. Increased organisational performance
                Enhanced ability of companies to attract talent and retain employees. Enhanced
                organisational reputation.
              </p>
            </div>
            <div className="col-7 mobile">
              <div className="border-offset-all border-offset-left-mobile ">
                <div className="image-three image-three-mobile"></div>
              </div>
            </div>
          </section>
          <section className="pt-5 mobileTop">
            <h3 className="centered pb-3">
              <img className="icon" src="./Images/search.png" alt="icon" />
            </h3>
            <h4 className="pb-3 centered"> Search Now</h4>
            <Search search={this.searchBusiness} filter={this.filterBusiness} />
            <div className="businessContainer">
              {/* businesses being rendered here */}
              {this.state.businesses.map(business => {
                if (
                  business.name.toLowerCase().includes(this.state.search) ||
                  business.type.toLowerCase().includes(this.state.search)
                ) {
                  return (
                    <Accordion defaultActiveKey="0" className="pt-3 pb-3" key={this.randomKey(50)}>
                      <Card className="hvr-grow">
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <h2>{business.name}</h2>
                            <div className="pb-3 d-flex">
                              <section className="col-12 d-flex">
                                <div className="indiviudal col-4">Industry: {business.type}</div>
                                <div className="indiviudal col-4">
                                  Number of Employees: {business.num_of_employees}
                                </div>
                                <div className="indiviudal col-4">
                                  Business Age : {business.company_age}
                                </div>
                              </section>
                            </div>
                            <ProgressBar
                              now={business.Av}
                              className={business.ranking === 2 ? 'yellow' : 'green'}
                            />
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body className="comparisons">
                            <section className="pt-0">
                              <h5>Male to Female </h5>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar
                                  variant="success"
                                  now={JSON.stringify(business.men_company)}
                                  label={business.men_company + '%'}
                                  key={1}
                                />
                                <ProgressBar
                                  variant="warning"
                                  now={JSON.stringify(100 - business.men_company)}
                                  label={100 - business.men_company + '%'}
                                  key={2}
                                />
                              </ProgressBar>
                            </section>
                            <h5>Male to Female Salaries</h5>
                            <h6>Director Comparison</h6>
                            <section className="d-flex justify-content-center text">
                              <div className="col-4">
                                <h5>Male</h5>
                                <h4>{business.avgsal_man_director}€</h4>
                              </div>
                              <div className="col-4 comparison-icon">
                                <i className="fas fa-not-equal"></i>
                              </div>
                              <div className="col-4">
                                <h5>Female</h5>
                                <h4>{business.avgsal_women_director}€</h4>
                              </div>
                            </section>
                            <h6>Manager Comparison</h6>
                            <section className="d-flex justify-content-center text">
                              <div className="col-4">
                                <h5>Male</h5>
                                <h4>{business.avgsal_man_manager}€</h4>
                              </div>
                              <div className="col-4 comparison-icon">
                                <i className="fas fa-not-equal"></i>
                              </div>
                              <div className="col-4">
                                <h5>Female</h5>
                                <h4>{business.avgsal_women_manager}€</h4>
                              </div>
                            </section>
                            <h6>Intern Comparison</h6>
                            <section className="d-flex justify-content-center text">
                              <div className="col-4">
                                <h5>Male</h5>
                                <h4>{business.avgsal_man_intern}€</h4>
                              </div>
                              <div className="col-4 comparison-icon">
                                <i className="fas fa-not-equal"></i>
                              </div>
                              <div className="col-4">
                                <h5>Female</h5>
                                <h4>{business.avgsal_women_intern}€</h4>
                              </div>
                            </section>

                            <section className="multiple-bars">
                              <h5>Wages in different positions</h5>
                              <h6>Director Male to Female</h6>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar
                                  variant="success"
                                  now={JSON.stringify(business.director_men)}
                                  label={business.director_men + '%'}
                                  key={1}
                                />
                                <ProgressBar
                                  variant="warning"
                                  now={JSON.stringify(100 - business.director_men)}
                                  label={100 - business.director_men + '%'}
                                  key={2}
                                />
                              </ProgressBar>
                              <h6>Specialist in Field Male to Female</h6>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar
                                  variant="success"
                                  now={JSON.stringify(business.specialist_men)}
                                  label={business.specialist_men + '%'}
                                  key={1}
                                />
                                <ProgressBar
                                  variant="warning"
                                  now={JSON.stringify(100 - business.specialist_men)}
                                  label={100 - business.specialist_men + '%'}
                                  key={2}
                                />
                              </ProgressBar>
                              <h6>Assistant Male to Female</h6>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar
                                  variant="success"
                                  now={JSON.stringify(business.assistant_men)}
                                  label={business.assistant_men + '%'}
                                  key={1}
                                />
                                <ProgressBar
                                  variant="warning"
                                  now={JSON.stringify(100 - business.assistant_men)}
                                  label={100 - business.assistant_men + '%'}
                                  key={2}
                                />
                              </ProgressBar>
                            </section>
                            <section>
                              <h5>People Hired After 30+</h5>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar
                                  variant="success"
                                  now={JSON.stringify(business.men_after30)}
                                  label={business.men_after30 + '%'}
                                  key={1}
                                />
                                <ProgressBar
                                  variant="warning"
                                  now={JSON.stringify(100 - business.men_after30)}
                                  label={100 - business.men_after30 + '%'}
                                  key={2}
                                />
                              </ProgressBar>
                            </section>
                            <section className="multiple-bars">
                              <h5>Type of Contract Relation</h5>
                              <h6>Male to Female Contract Type - Temporary</h6>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar
                                  variant="success"
                                  now={JSON.stringify(business.men_temp)}
                                  label={business.men_temp + '%'}
                                  key={1}
                                />
                                <ProgressBar
                                  variant="warning"
                                  now={JSON.stringify(100 - business.men_temp)}
                                  label={100 - business.men_temp + '%'}
                                  key={2}
                                />
                              </ProgressBar>
                              <h6>Male to Female Contract Type - Permanent</h6>
                              <ProgressBar className="comparison-bar">
                                <ProgressBar
                                  variant="success"
                                  now={JSON.stringify(business.men_fixed)}
                                  label={business.men_fixed + '%'}
                                  key={1}
                                />
                                <ProgressBar
                                  variant="warning"
                                  now={JSON.stringify(100 - business.men_fixed)}
                                  label={100 - business.men_fixed + '%'}
                                  key={2}
                                />
                              </ProgressBar>
                            </section>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  );
                }
              })}
              {/* if (this.state.search !== this.business.name || this.business.type) {
                  return 'No Business or Industry found, please try again';
                } */}
              {/* No Business or Industry found, please try again */}
            </div>
          </section>
          <section className="centered pt-5 pb-5 contact">
            <h4 className="pb-3">Contact us</h4>
            <h5>
              Get in touch to see how our services can make an impact on your business. Hire our
              consulting services and achieve grow company results.
              <br />
              <br />
              <br />
              <p>Contact: equalitycollective@info.com</p>
            </h5>
            <p></p>
          </section>
        </main>
        <footer>
          <span>© January 2020 IronHackers </span>
          <div>
            <p>Web Development by Sofia Franek, Raquel Coelho & Filipe Nunes</p>
            <p>Data Analytics by José Pereira & Tiago Dias</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
