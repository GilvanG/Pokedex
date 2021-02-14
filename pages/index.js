import React from 'react';
import BoxPokemon from '../src/components/BoxPokemon';
import Container from '../src/components/Container';

export default function Home() {
  const [Pokemons, setPokemons] = React.useState();
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151/')
    .then((promissePokemon) => promissePokemon.json())
    .then((PokemonJSON) => setPokemons(PokemonJSON.results));
  return (
    <Container>
      <p>POKEDEX</p>
      {Pokemons.map((pokemon, index) => (
        <BoxPokemon>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            alt={pokemon.name}
          />
        </BoxPokemon>
      ))}
    </Container>
  );
}
