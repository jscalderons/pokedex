import React from 'react';
import NationalPokedex from './data/pokedex.json';
// Components
import { PokeList, PokeSearch } from './components';

class App extends React.Component {
  state = {
    pokedex: [],
    pokemons: []
  }

  componentDidMount() {
    const { pokedex } = this.props;

    this.setState({ pokemons: pokedex });
  }

  filterList(value) {
    const { pokedex } = this.props;
    const query = value.toLowerCase();

    const filtered = pokedex.filter((pokemon) => {
      const type = pokemon.type.find(type => type.toLowerCase().includes(query));
      const name = pokemon.name.toLowerCase().includes(query);
      const code = pokemon.id === parseInt(value);

      return code || name || type;
    });

    this.setState({ pokemons: filtered })
  }

  render() {
    const { pokemons } = this.state;

    return (
      <div className="App">
        <div className="pokedex">
          <header className="pokedex-header">
            <PokeSearch filterList={value => this.filterList(value)} />
            <span className="poke-count">{pokemons.length}</span>
          </header>
          <main className="pokedex-main">
            <PokeList pokemons={pokemons} />
          </main>
          <footer className="pokedex-footer">
            Jhonathan Calderon
          </footer>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  pokedex: NationalPokedex, //.slice(0, 151),
}

export default App;
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
// https://pokeapi.co/api/v2/pokemon/