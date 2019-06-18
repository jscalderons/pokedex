import React from 'react';
import PokeCard from './PokeCard';

function PokeList({ pokemons }) {
    return (
        <div className="poke-list">
            {pokemons.map(pokemon => <PokeCard pokemon={pokemon} key={pokemon.id} />)}
        </div>
    );
}

export default PokeList;
