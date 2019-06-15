import React from 'react';
import { mocks } from '../environments';
import PokemonCard from './PokemonCard';

class PokemonList extends React.Component {
    render() {
        const { pokedex } = this.props;

        return (
            <div>
                {pokedex.map(pokemon => <PokemonCard pokemon={pokemon} />)}
            </div>
        );
    }
}

PokemonList.defaultProps = {
    pokedex: mocks.pokedex
}

export default PokemonList;
