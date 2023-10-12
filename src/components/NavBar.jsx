function NavBar({ setPokemonIndex, pokemonList }) {


    return (



        <>
            {pokemonList.map((pokemon, index) =>
                <button onClick={() => {
                    setPokemonIndex(index);
                    { pokemon.name === "pikachu" ? alert("Pika pikachu !") : "" }
                }}
                    key={pokemon.name}>
                    {pokemon.name}
                </button>
            )}





        </>
    )
}

export default NavBar;