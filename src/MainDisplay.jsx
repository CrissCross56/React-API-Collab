
import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import "./MainDisplay.css"
import axios from "axios";
import PaintingModel from "./Model/Model.js"

function MainDisplay(props){

    const [index, setIndex] = useState(0);
    console.log(props.imgSrc)

    function increment(){
        if(index >= props.imgSrc.length - 1){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
      
    }

    function decrement(){
        if(index <= 0){
            setIndex(props.imgSrc.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }

    //define a test model to test editing

    let testObject = {
        date_display: "Grant"
    }

   async function edit(){
     await axios.put(`https://pearse-o-app.herokuapp.com/artworks/${props.imgSrc[index].title}`, testObject)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const deletePainting = async(e) =>{
        console.log(props.imgSrc[index].title);
        await axios.delete(`https://pearse-o-app.herokuapp.com/artworks/${props.imgSrc[index].title}`)
        .then(window.location.reload)
    }

    return(
        <div id="grid">
             <h1 id="name"><span>Painting: </span>{props.imgSrc[index].title}</h1>
            <button onClick={decrement}>{`<`}</button>
            <div id="painting" style={{backgroundImage: `url(${props.imgSrc[index].img})`, width: 500, height: 500, backgroundRepeat: "no-repeat", backgroundSize: "cover", hover:()=>{console.log('hovering')}} }>
            <button id='delete' onClick={deletePainting}>Delete</button>
                <div id="smallDiv">
                    <ul id="paintingList">
                        <li className="paintingInfo"><span className="opening">Title:</span><span>{props.imgSrc[index].title}</span></li>
                        <li className="paintingInfo"><span className="opening">Displayed:</span><span> {props.imgSrc[index].date_display}</span></li>
                        <li className="paintingInfo"><span className="opening">Artist:</span><span> {props.imgSrc[index].artist}</span></li>


                    </ul>
                </div>
            <button onClick={edit} id="edit">Edit</button>
            </div>
            <button onClick={increment}>{`>`}</button>
        </div>
    );
}

export default MainDisplay;