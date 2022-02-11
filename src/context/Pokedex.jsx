import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PokedexContext = createContext({
  listPokemon: Array.prototype,
  getDataPokemons: Function.prototype,
  setPokemonFocus: Function.prototype,
  namePokemonFocus: String.prototype,
  dataPokemonFocus: Object.prototype,
  resetPokemonFocus: Function.prototype,
  limitsExpandPokedex: Array.prototype,
  resetDataPokemon: Function.prototype,
});

const PokedexProvider = ({ children }) => {
  const limitsExpandPokedex = [
    { name: 'Kanto', value: 151 },
    { name: 'Johto', value: 251 },
    { name: 'Hoen', value: 386 },
    { name: 'Sinnoh', value: 493 },
    { name: 'Unova', value: 649 },
    { name: 'Kalos', value: 721 },
    { name: 'Alola', value: 809 },
    { name: 'Galar', value: 898 },
  ];
  const [pokedex, setPokedex] = useState([]);
  const [listPokemon, setListPokemon] = useState([]);
  const [namePokemonFocus, setNamePokemonFocus] = useState('');
  const [dataPokemonFocus, setDataPokemonFocus] = useState();
  const [limitIndex, setLimitIndex] = useState(0);

  function getDataPokemons(region = '') {
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
          setListPokemon([{ name: 'Kanto', pokedex: PokemonJSON.pokemon_entries.slice(0, 151) }]);
          return 'Kanto';
        });
    } else if (region !== '') {
      if (region === 'Kanto') {
        setListPokemon([{
          name: 'Kanto',
          pokedex: pokedex.slice(0, 151),
        }]);
      } else {
        const indexRegion = limitsExpandPokedex.findIndex(({ name }) => name === region);
        if (indexRegion === undefined) {
          return undefined;
        }
        setListPokemon([{
          name: region,
          pokedex: pokedex.slice(
            limitsExpandPokedex[indexRegion - 1].value,
            limitsExpandPokedex[indexRegion].value,
          ),
        }]);
      }
      setLimitIndex(-1);
      return region;
    } else if (limitIndex < limitsExpandPokedex.length && limitIndex !== -1) {
      setListPokemon([...listPokemon,
        {
          name: limitsExpandPokedex[limitIndex + 1].name,
          pokedex: pokedex.slice(
            limitsExpandPokedex[limitIndex].value,
            limitsExpandPokedex[limitIndex + 1].value,
          ),
        },
      ]);
      setLimitIndex(limitIndex + 1);
      return limitsExpandPokedex[limitIndex].name;
    }
    return null;
  }

  const resetDataPokemon = () => {
    setPokedex([]);
    setListPokemon([]);
    setNamePokemonFocus('');
    setDataPokemonFocus();
    setLimitIndex(0);
    getDataPokemons();
  };

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
      limitsExpandPokedex,
      resetDataPokemon,
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
    limitsExpandPokedex, resetDataPokemon,
  } = Pokedex;
  return {
    listPokemon,
    getDataPokemons,
    setPokemonFocus,
    namePokemonFocus,
    dataPokemonFocus,
    resetPokemonFocus,
    limitsExpandPokedex,
    resetDataPokemon,
  };
};
