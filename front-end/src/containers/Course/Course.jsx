import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

const Course = ({baseURL}) => {
    const {courseId} = useParams();
    const [course, setCourse] = useState(undefined);

    const getCourse = async () => {
        const response = await fetch(baseURL + "course/" + courseId);
        let data = await response.json();
        setCourse(data[0]);
    }

    // const deleteCourse = async() => {
        
    // }

    useEffect(() => {
        getCourse();
    }, [])

    return (
        <div>
            {/* {course && {course.name}} */}
            {/* <button onClick={deleteCourse}>Delete Course</button> */}
        </div>
    )
}

export default Course