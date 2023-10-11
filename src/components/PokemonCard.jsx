import "./pokemonCard.css"


function PokemonCard(props) {

    console.log(props.pokemon);
    return (
        <figure className="card">
            {props.pokemon.imgSrc ? <img
                className="card-img"
                src={props.pokemon.imgSrc}
                alt={props.pokemon.name}
                title={props.pokemon.names}
            /> : <p>???</p>}
            <figcaption>{props.pokemon.name}</figcaption>

        </figure>
    )
}



export default PokemonCard;