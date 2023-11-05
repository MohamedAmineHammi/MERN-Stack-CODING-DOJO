import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // We expect an array of pokemon objects back and so we will
  //    choose an empty array as the initial value to be held
  //    in state
  const [pokemon, setPokemon] = useState([]);

  // this will run immediately after the JSX is rendered
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        // this will return the data from the response object
        //    in a json format
        return response.json()
      })
      .then(response => {
        // store the json converted data in state so it can be displayed
        setPokemon(response.results)
      })
      .catch((err) => {
        console.log(err);
      })
    
    // no clean up statement is required since we are not using resources
    //    that will continue to run
  }, []);  
  // The empty array as the second parameter makes it so that useEffect 
  //    does NOT run more than once

  // using an unordered list to match the wireframe
  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <ul>
        {
          pokemon.map((pokemonObj, index)=>{
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;