import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

const Course = ({baseURL}) => {
    const {courseId} = useParams();
    const [course, setCourse] = useState(undefined);

    const getCourse = async () => {
        const response = await fetch(baseURL + "course/" + courseId);
        let data = await response.json();
        console.log(data)
        setCourse(data);
    }

    const deleteCourse = async() => {
        fetch(baseURL + "course/" + courseId, { method: 'DELETE' })
    }

    useEffect(() => {
        getCourse();
    }, [])

    return (
        <div>
            {course && <>
                <h1>{course.name}</h1>
                <p>Category: {course.category}</p>
                <p>{course.description}</p>
                <p>Price: {course.price}</p>
                <p>Author: {course.author}</p>
                <p>Completion Time: {course.completionTime}</p>
            </>}
            <button onClick={deleteCourse}>Delete Course</button>
        </div>
    )
}

export default Course