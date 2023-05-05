import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=12';

// const axios = require('axios');

function App() {
  const [allPokemons, setAllPokemons] = useState([]);

  console.log(allPokemons);

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await axios.get(BASE_URL);
        setAllPokemons(response.data.results)
      } catch (error) {
        console.log(error);
      }
    }
    getPokemons()
  }, []);

  return (
    <div className="App">
      <header>
        <h1>
          Pokedex
        </h1>
      </header>
      <body>
      {allPokemons.map((pokemon) => (
        <>
        <div> {  pokemon.name } </div>
        </>
      ))}
      </body>
    </div>
  );
}

export default App;
