import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PokedexContext = createContext({
  listPokemon: Array.prototype,
  getDataPokemons: Function.prototype,
  setPokemonFocus: Function.prototype,
  namePokemonFocus: String.prototype,
  dataPokemonFocus: Object.prototype,
  resetPokemonFocus: Function.prototype,
});

const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);
  const [listPokemon, setListPokemon] = useState([]);
  const [namePokemonFocus, setNamePokemonFocus] = useState('');
  const [dataPokemonFocus, setDataPokemonFocus] = useState();

  function getDataPokemons() {
    if (!pokedex.length) {
      fetch('https://pokeapi.co/api/v2/pokedex/1')
        .then((promissePokemon) => {
          if (promissePokemon.ok) {
            return promissePokemon.json();
          }
          return [];
        })
        .then((PokemonJSON) => {
          setPokedex(PokemonJSON.pokemon_entries);
          setListPokemon([...PokemonJSON.pokemon_entries.slice(0, 151)]);
        });
    } else {
      setListPokemon([...pokedex.slice(0, 151)]);
    }
  }

  const setPokemonFocus = (namePokemon, urlPokemon) => {
    setNamePokemonFocus(namePokemon);
    fetch(urlPokemon)
      .then((promissePokemon) => {
        if (promissePokemon.ok) {
          return promissePokemon.json();
        }
        return [];
      })
      .then((PokemonData) => {
        setDataPokemonFocus(PokemonData);
      });
  };

  const resetPokemonFocus = () => {
    setNamePokemonFocus('');
    setDataPokemonFocus();
  };

  return (
    <PokedexContext.Provider value={{
      listPokemon,
      getDataPokemons,
      setPokemonFocus,
      namePokemonFocus,
      dataPokemonFocus,
      resetPokemonFocus,
    }}
    >
      { children }
    </PokedexContext.Provider>
  );
};

PokedexProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokedexProvider;

export const usePokedex = () => {
  const Pokedex = useContext(PokedexContext);
  const {
    listPokemon, getDataPokemons, setPokemonFocus,
    namePokemonFocus, dataPokemonFocus, resetPokemonFocus,
  } = Pokedex;
  return {
    listPokemon,
    getDataPokemons,
    setPokemonFocus,
    namePokemonFocus,
    dataPokemonFocus,
    resetPokemonFocus,
  };
};
