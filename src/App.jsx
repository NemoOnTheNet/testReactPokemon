import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar";


function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];




  const [pokemonIndex, setPokemonIndex] = useState(0);

  const HandleClickPrecedent = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  const HandleClicksuivant = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  const pokemon = pokemonList[pokemonIndex];


  return (
    <>
      <PokemonCard pokemon={pokemon} />
      <NavBar
        HandleClickPrecedent={HandleClickPrecedent}
        HandleClicksuivant={HandleClicksuivant}
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}

      />
    </>
  )
}

export default App
