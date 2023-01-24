import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
// import logo from '../assets/img/signature.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export default function Footer() {
  return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
              <Col sm={6}>
                  {/* <img src={logo} alt="logo"/> */} <h2>Empower</h2>
              </Col>
              <Col sm={6} className="text-center text-sm-end">
                  <div className='social-icon'>
                      <a href=""><img src={navIcon1} /></a>
                      <a href=""><img src={navIcon2} /></a>
                      <a href=""><img src={navIcon3} /></a>
                  </div>
                  <p>CopyRight 2022-25. All right Reserved A || R</p>
              </Col>
          </Row>
        </Container>        
      </footer>
  )
}
