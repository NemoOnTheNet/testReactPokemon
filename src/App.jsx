import { useState } from "react";
import PokemonCard from "./components/PokemonCard"

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
      {pokemonIndex > 0 ? <button onClick={HandleClickPrecedent} >Précedent</button> : ''}
      {pokemonIndex < (pokemonList.length - 1) ? < button onClick={HandleClicksuivant} >Suivant</button > : ''}
    </>
  )
}

export default App
