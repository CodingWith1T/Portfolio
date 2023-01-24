import Tab from 'react-bootstrap/Tab';
import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Nav from 'react-bootstrap/Nav';
import { ProjectCards } from './ProjectCards';
import Container from 'react-bootstrap/esm/Container';
import colorSharp2 from "../assets/img/color-sharp2.png"
import project1 from "../assets/img/Travel-website.png"
import project2 from "../assets/img/Coffee-StartUp.png"
import project3 from "../assets/img/Personal-Protfolio.png";
import project4 from "../assets/img/project-img4.png";


export default function Projects() {
    const projects =[
    {
        title: "Travel Website",
        description:"Design & Development",
        imgUrl:project1,
        link:'www.google.com',
    },
    {
        title: "Coffee Website",
        description:"Design & Development",
        imgUrl:project2,
        link:'www.youtube.com',
    },
    {
        title: "Portfolio Website",
        description:"Design & Development",
        imgUrl:project3,
        link:'https://codingwith1t.github.io/Personal-Portfolio/',
    },
    {
        title: "Car || Bus Rental - RideWorks",
        description:"Design & Development",
        imgUrl:project4,
        link:'https://codingwith1t.github.io/Rideworks/',
    },
    {
        title: "Travel Website",
        description:"Design & Development",
        imgUrl:project1,
        link:'www.google.com',
    },
    {
        title: "Travel Website",
        description:"Design & Development",
        imgUrl:project1,
        link:'www.google.com'
    }
]

  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>My work</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-content-center' id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Front-End</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Back-End</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            DataBase
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index) =>{
                                        return(
                                            <ProjectCards
                                            key={index}
                                            {...project} />

                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Back-End Projects</Tab.Pane>
                        <Tab.Pane eventKey="third">DataBase Projects</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' alt="img" src={colorSharp2} />
    </section>
  )
}
