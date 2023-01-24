import React from 'react'
import Carousel from "react-multi-carousel"
import Container  from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/esm/Row'
import Col  from 'react-bootstrap/esm/Col'
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>Such as Front-end Languages and Frameworks (HTML, CSS, JavaScript, BootStrap, React), Backend Technologies and Frameworks (JavaCore, Servlet, JSP, Hibernate, Spring, SpringBoot), Database Management Systems (SQL, MySQL, MongoDB,), killVersion Control, and Web Hosting Platforms others Git and Github</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <img src={meter1} alt="SKills" />
                                <h5>HTML and HTML5</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="SKills" />
                                <h5>CSS & CSS3</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="SKills" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="SKills" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="SKills" />
                                <h5>Java Core</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="SKills" />
                                <h5>Servelt</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="SKills" />
                                <h5>JSP</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="SKills" />
                                <h5>Hibernate</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="SKills" />
                                <h5>Spring MVC</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="SKills" />
                                <h5>MySql</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt='background-img' />
    </section>
    </>
  )
}
