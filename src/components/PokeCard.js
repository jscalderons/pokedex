import React from 'react';

class PokeCard extends React.Component {

    renderBase(base) {
        return (
            <ul className="poke-card--base-list">
                {Object.keys(base).map((key, index) => (
                    <li key={index}>{key}: {base[key]}</li>
                ))}
            </ul>
        )
    }
    
    renderTypes(type) {
        return type.map((name, index) => (
            <span key={index} 
                className={`poke-card--type-${name}`}>
                {name}
            </span>
        ));
    }

    render() {
        const { pokemon } = this.props;
        const image = require(`../assets/thumbnails/${pokemon.id}.png`);

        return (
            <div className="poke-card" tabIndex="0">
                <img src={image} alt={pokemon.name} className="poke-card--image" />
                <div className="poke-card--info">
                    <h4 className="poke-card--name">{pokemon.id} - {pokemon.name}</h4>
                    <div className="poke-card--types">{this.renderTypes(pokemon.type)}</div>
                    <div>{this.renderBase(pokemon.base)}</div>
                </div>
            </div>
        );
    }
}

export default PokeCard;
