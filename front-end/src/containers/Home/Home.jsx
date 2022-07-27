import React from 'react'
import CourseCard from '../../components/CourseCard/CourseCard';


const Home = () => {
    const url = "";
    const getCoursesJSX = async () => {

    }
    return (
        <div className='home'>
            <h1>All Courses</h1>
            <CourseCard name="course" category="category" completionTime={7} price={43.99} author="author" description={""}/>
        </div>
    )
}

export default Home