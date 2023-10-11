import "./pokemonCard.css"
import PropTypes from "prop-types";


function PokemonCard({ pokemon }) {

    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        }).isRequired,
    }

    console.log();
    return (
        <figure className="card">
            {pokemon.imgSrc ? <img
                className="card-img"
                src={pokemon.imgSrc}
                alt={pokemon.name}
                title={pokemon.names}
            /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>

        </figure>
    )
}



export default PokemonCard;