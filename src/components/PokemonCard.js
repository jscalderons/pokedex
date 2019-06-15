import React from 'react';

function PokemonCard({ pokemon }) {
    return (
        <div>
            <h4>{pokemon.name}</h4>
        </div>
    );
}

export default PokemonCard;
