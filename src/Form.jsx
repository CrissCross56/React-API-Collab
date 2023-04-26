
import "./Form.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
function Form(){

    useEffect(() => {
        
    },[])


    function handleSubmit(e){
        //make a fetch request assuming the info is correct
        
        //make a fetch request to all the paintings if the fetch doesnt return due to incorrect input
        

    }

    function handleChange(e){

    }

    return(
      
        <div id="submissionForm">
            <h2>CRUD Form</h2>

            <ul id="crudNav">
                <li className="crudChoice">Create</li>
                <li className="crudChoice">Read</li>
                <li className="crudChoice">Update</li>
                <li className="crudChoice">Delete</li>
            </ul>

            <form onSubmit={handleSubmit}>
            <input className="userWrite" onChange={handleChange} type="text" placeholder="title" id='title'/>
            <input className="userWrite" onChange={handleChange} type="text" placeholder="Date(s) Displayed" id='dateDisplay'/>
            <input className="userWrite" onChange={handleChange} type="text" placeholder='Artist' id='artist'/>
            <input className="userWrite" onChange={handleChange} type="text" placeholder="Image URL Link" id="imgLink"/>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Form