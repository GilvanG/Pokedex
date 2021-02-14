import React from 'react';
import BoxPokemon from '../src/components/BoxPokemon';
import Container from '../src/components/Container';

export default function Home() {
  const [Pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/2/')
      .then((promissePokemon) => {
        if (promissePokemon.ok) {
          return promissePokemon.json();
        }
      })
      .then((PokemonJSON) => {
        console.log(PokemonJSON.pokemon_entries);
        setPokemons(PokemonJSON.pokemon_entries);
      });
  }, []);
  return (
    <Container>
      <p>POKEDEX</p>
      {Pokemons.map((pokemon) => (
        <BoxPokemon>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
            alt=""
          />
        </BoxPokemon>
      ))}
    </Container>
  );
}
