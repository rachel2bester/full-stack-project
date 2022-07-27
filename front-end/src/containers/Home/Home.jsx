import React, { useEffect, useState } from 'react'
import CourseCard from '../../components/CourseCard/CourseCard';


const Home = () => {
    const [courses, setCourses] = useState([]);
    const [responseOK, setResponseOK] = useState(undefined);

    const url = "http://localhost:8080/courses";
    const getCourses = async () => {
        const response = await fetch(url);
        let data = await response.json();
        setResponseOK(response.ok);
        setCourses(data);
    }

    useEffect(() => {
        getCourses();
    }, [])

    let coursesJSX = courses.map((course) => {
        const {name, category, completionTime, price, description, author} = course;
        return <CourseCard name={name} category={category} completionTime={completionTime} price={price} author={author} description={description}/>
    })

    return (
        <div className='home'>
            <h1>All Courses</h1>
            {coursesJSX}
        </div>
    )
}

export default Home