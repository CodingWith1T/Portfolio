import { useState, useEffect } from 'react'
import React from 'react'
import Container  from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/esm/Row'
import Col  from 'react-bootstrap/esm/Col'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import BannerImg from "../assets/img/header-img.svg"

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Front-end Developer", "Back-end Developer", "Java Developer", "UI/UX Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  return (
    <>
     <section className="banner" id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Abhishek Raghav`}</h1>
                    <h2><span className='wrap'>{text}</span><span>.</span></h2>
                    <p>Passonate full-stack developer with trained freshers of hands-on experience in developing scalable websites/application using a wide range of front-end and back-end skills like HTML, CSS, JavaScript, Java, etc. Developed 15+ websites from scratch at Scaler. Looking to further enhance HTML5, CSS3, JS ES6, Spring, Spring Boot skills as the future full stack developer.</p>
                    <button onClick={() => console.log('connect')}>Let's connect <BsFillArrowRightCircleFill size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                        <img src={BannerImg} alt="Banner Img" />
                </Col>
            </Row>
        </Container>
    </section> 
    </>
  )
}
