import {useState} from 'react';
import './App.css'
import Nav from "./components/Nav/Nav.jsx";
import Cards from './components/Cards/Cards.jsx';


function App() {


 const [characters, setCharacters] = useState([]);

 function onSearch(characterID) {
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }
 
 const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id));
};


  return (
    <div className='App' style={{ padding: '25px' }}>
      
    <Nav onSearch = {onSearch}/>
      
      <Cards characters={characters} onClose={onClose}/>


    </div>
  )
}

export default App
