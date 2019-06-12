import React from 'react';
// environments
import { mocks } from './environments'
// components
import Layout from './layouts';

class App extends React.Component {
  state = {
    loading: false,
    error: null,
    pokemons: [],
    previous: null,
    next: null,
    count: 0
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.getPokemonList();
  }

  getPokemonList() {
    fetch('https://pokeapi.co/api/v2/pokedex/national')
      .then(async (res) => {
        const { pokemon_entries } = await res.json();

        this.setState({
          pokemons: pokemon_entries
        })
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  renderPokemonCard(pokemon, index) {
    return (
      <div key={pokemon.entry_number}>
        <h4>{pokemon.pokemon_species.name}</h4>
      </div>
    );
  }

  renderPokemonList() {
    const { pokemons } = this.state;

    return (
      <div>
        {pokemons.map(this.renderPokemonCard)}
      </div>
    );
  }

  renderPokedex() {
    if (this.loading) {
      return (
        <span>Cargando...</span>
      );
    }

    return (
      <div>
        {this.renderPokemonList()}
      </div>
    );
  }

  render() {
    return (
      <Layout>
        {this.renderPokedex()}
      </Layout>
    );
  }
}

export default App;
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
// https://pokeapi.co/api/v2/pokemon/