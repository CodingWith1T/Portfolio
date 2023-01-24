import React from 'react'
import Col from 'react-bootstrap/esm/Col';

export const ProjectCards = ({title, description, imgUrl, link}) => {
  return (
      <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="projects-img"/>
            <div className='proj-txtx'>
                <a href= {`${link}`}  target="__blank"><h4>{title}</h4></a>
                <span>{description}</span>
            </div>
        </div>
      </Col>
    
  )
}
