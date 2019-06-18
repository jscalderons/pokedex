import React, { Component } from 'react';

class PokeSearch extends Component {
  state = {
    query: ''
  }

  setQuery(value) {
    this.setState({ query: value });
    this.props.filterList(value);
  }

  render() {
    return (
      <input type="search" 
        className="poke-search"
        placeholder="Buscar..."
        value={this.state.query} 
        onChange={e => this.setQuery(e.target.value)} />
    );
  }
}

export default PokeSearch;
