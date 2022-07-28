import React from 'react'
import "./CourseCard.scss"

const CourseCard = (props) => {
    const {key, name, category, completionTime, price, author} = props;
  return (
    <div className='course-card' key={key}>
        <h1 className='course-card__title'>{name}</h1>
        <h2 className='course-card__author'>{author}</h2>
        <h3 className='course-card__category'>{category}</h3>
        <h4 className='course-card__completionTime'>{completionTime} hours</h4>
        <h4 className='course-card__price'>£{price}</h4>
    </div>
  )
}

export default CourseCard