import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CourseCard from '../../components/CourseCard/CourseCard';
import "./Home.scss"


const Home = () => {
    const [courses, setCourses] = useState([]);
    // const [responseOK, setResponseOK] = useState(undefined);

    const url = "http://localhost:8080/courses";
    const getCourses = async () => {
        const response = await fetch(url);
        let data = await response.json();
        // setResponseOK(response.ok);
        setCourses(data);
    }

    useEffect(() => {
        getCourses();
    }, [])

    let coursesJSX = courses.map((course) => {
        const {id, name, category, completionTime, price, author} = course;
        return (
            <Link to={"/course/" + id} key={id} style={{textDecoration: 'none'}}>
                <CourseCard name={name} category={category} completionTime={completionTime} price={price} author={author}/>
            </Link>
        )
    })

    return (
        <div className='home'>
            <h1 className='home__title'>All Courses</h1>
            <div className='home__courses-container'>
            {coursesJSX}
            </div>
            
        </div>
    )
}

export default Home