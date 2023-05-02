
import "./Form.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import PaintingModel from './Model/Model.js'
import axios from "axios"
function Form(){

    // useEffect(() => {
        
    // },[])

    const postData = {
        title: "",
        date_display: "",
        artist: "",
        img: ""
    }

     async function handleSubmit(e){
        //make a fetch request assuming the info is correct
        await axios.post('https://pearse-o-app.herokuapp.com/artworks', postData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
        //make a fetch request to all the paintings if the fetch doesnt return due to incorrect input
        
        console.log("form")
    }

    function handleChange(e){
        console.log(e.target.value)

        if(e.target.id === "title"){
            postData.title = e.target.value;
        }
        else if (e.target.id === "dateDisplay"){
            postData.date_display = e.target.value;
        }
        else if (e.target.id === "artist"){
            postData.artist = e.target.value;
        }
        else if(e.target.id === "img"){
            postData.img = e.target.value;
        }
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
            <input className="userWrite" onChange={handleChange} type="text" placeholder="Image URL Link" id="img"/>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Form