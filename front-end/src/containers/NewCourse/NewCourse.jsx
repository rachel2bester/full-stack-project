import React from 'react'
import "./NewCourse.scss"

const NewCourse = ({baseURL}) => {

    const onSubmit = (event) => {
        event.preventDefault();
        addCourse(event.target)
    }
    
    const addCourse = async (courseHTML) => {
        console.log(courseHTML)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "name": courseHTML.name.value,
                    "category": courseHTML.category.value,
                    "completionTime": courseHTML.completionTime.value,
                    "price": courseHTML.price.value,
                    "description": courseHTML.description.value,
                    "author": courseHTML.author.value
                }
            )
        };
        fetch(baseURL + "course", requestOptions)
            // .then(response => response.json())
            // .then(data => this.setState({ postId: data.id }));
    }
    return (<>
            <div>NewCourse</div>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name:</label>
                <input name='name' id='name' type="text"></input>
                <label htmlFor='author'>Author:</label>
                <input name='author' id='author' type="text"></input>
                <label htmlFor='category'>Category:</label>
                <input name='category' id='category' type="text"></input>
                <label htmlFor='completion-time'>Completion Time (days):</label>
                <input name='completionTime' id='completion-time' type="number" step={0.5}></input>
                <label htmlFor='description'>Description:</label>
                <input name='description' id='description' type="text"></input>
                <label htmlFor='price'>Price:</label>
                <input name='price' id='price' type="number" step={0.01}></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default NewCourse