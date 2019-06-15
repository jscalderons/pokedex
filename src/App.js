import React from 'react';
import Pokedex from './layouts/Pokedex';
import { PokemonList } from './components';

function App() {
  return (
    <Pokedex>
      <PokemonList />
    </Pokedex>
  );
}

export default App;
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
// https://pokeapi.co/api/v2/pokemon/