function NavBar({ HandleClickPrecedent, HandleClicksuivant, pokemonList, pokemonIndex }) {
    return (
        <>
            {pokemonIndex > 0 ? <button onClick={HandleClickPrecedent} >Précedent</button> : ''}
            {pokemonIndex < (pokemonList.length - 1) ? < button onClick={HandleClicksuivant} >Suivant</button > : ''}
        </>
    )
}

export default NavBar;