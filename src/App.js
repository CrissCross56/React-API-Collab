import logo from './logo.svg';
import './App.css';
import MainDisplay from './MainDisplay.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';
import { useState, useEffect } from 'react';
function App() {

  const [paintings, setPaintings] = useState([]);

  const getInfo = () => {
    fetch(`https://pearse-o-app.herokuapp.com/artworks`,{headers:{Accept: 'application/json'}})
    .then(res => res.json())
    .then(data => {
      setPaintings(data)
      // console.log(paintings)
      // console.log(data)
    })
  }

  useEffect(()=>{
    getInfo();
  },[])

  return (
    <div>
      <Header></Header>
      {paintings.length > 0 && <MainDisplay imgSrc={paintings}></MainDisplay>} 
      <Form></Form>
    </div>
  );
}

export default App;
